import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import {
  Container, TextField, Button, Typography, Box, CircularProgress, Alert
} from '@mui/material';
import MobiTokenABI from '../../abis/MobiTokenABI.json'; // ✅ Ensure correct path

const tokenAddress = "0x296Cb9090Eb49f259E21CFD8eD90F2cf461555e8";

const TokenTransfer = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [balance, setBalance] = useState("");
  const [signerAddress, setSignerAddress] = useState("");

  const fetchBalance = async (provider, contract, address) => {
    try {
      const rawBalance = await contract.balanceOf(address);
      const readableBalance = ethers.formatUnits(rawBalance, 18);
      setBalance(readableBalance);
    } catch (err) {
      console.error("Error fetching balance:", err);
    }
  };

  const handleTransfer = async () => {
    try {
      setLoading(true);
      setError("");
      setTxHash("");

      if (!window.ethereum) throw new Error("MetaMask is not installed.");
      
      // Request accounts with timeout handling
      try {
        await Promise.race([
          window.ethereum.request({ method: 'eth_requestAccounts' }),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error("MetaMask connection timed out")), 15000)
          )
        ]);
      } catch (error) {
        throw new Error(`Wallet connection failed: ${error.message}`);
      }

      // Create provider with error handling
      let provider;
      try {
        provider = new ethers.BrowserProvider(window.ethereum, "any");
      } catch (error) {
        throw new Error(`Provider creation failed: ${error.message}`);
      }
      
      // Get signer with error handling
      let signer;
      let userAddress;
      try {
        signer = await provider.getSigner();
        userAddress = await signer.getAddress();
        setSignerAddress(userAddress);
      } catch (error) {
        throw new Error(`Failed to get signer: ${error.message}`);
      }

      const contract = new ethers.Contract(tokenAddress, MobiTokenABI.abi, signer);

      const amountInWei = ethers.parseUnits(amount, 18);
      
      // Try using a different approach with direct transaction override
      let tx;
      try {
        // First approach: Using direct method with overrides
        tx = await contract.safeTransfer(recipient, amountInWei);
        setTxHash(tx.hash);
        console.log("Transaction sent using method 1:", tx);
      } catch (txError) {
        console.log("Method 1 failed, trying alternative approach:", txError);
        
        // Get network to set proper gas settings
        const network = await provider.getNetwork();
        const chainId = network.chainId;
        
        // Get current gas price with 10% buffer
        const feeData = await provider.getFeeData();
        const gasPrice = feeData.gasPrice ? 
          BigInt(Math.floor(Number(feeData.gasPrice) * 1.1)) : 
          undefined;
        
        // Prepare the transaction data manually
        const contractInterface = new ethers.Interface(MobiTokenABI.abi);
        const data = contractInterface.encodeFunctionData("safeTransfer", [recipient, amountInWei]);
        
        // Send transaction with manual parameters
        const txRequest = {
          to: tokenAddress,
          from: userAddress,
          data: data,
          chainId: chainId,
        };
        
        // Add gas price if available
        if (gasPrice) {
          txRequest.gasPrice = gasPrice;
        }
        
        // Estimate gas with buffer
        try {
          const estimatedGas = await provider.estimateGas(txRequest);
          txRequest.gasLimit = BigInt(Math.floor(Number(estimatedGas) * 1.2));
        } catch (gasError) {
          console.log("Gas estimation failed, using default:", gasError);
          txRequest.gasLimit = BigInt(100000); // Default gas limit
        }
        
        // Send the transaction
        tx = await signer.sendTransaction(txRequest);
        setTxHash(tx.hash);
        console.log("Transaction sent using method 2:", tx);
      }
      
      setTxHash(tx.hash);

      // Wait for transaction confirmation with timeout
      try {
        const receipt = await Promise.race([
          tx.wait(1), // Wait for 1 confirmation
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Transaction confirmation timed out")), 60000)
          )
        ]);
        console.log("Transaction confirmed:", receipt);
        
        // Refresh balance after successful transaction
        await fetchBalance(provider, contract, userAddress);
        alert("Transfer successful!");
      } catch (waitError) {
        console.error("Transaction may not be confirmed:", waitError);
        alert("Transaction sent, but confirmation is pending. Check your wallet for status.");
      }
    } catch (err) {
      console.error("Transfer error:", err);
      
      // Extract more useful error information
      let errorMessage = "Transaction failed";
      
      // Check for different error types and extract meaningful information
      if (err.code === 'ACTION_REJECTED') {
        errorMessage = "Transaction rejected by user";
      } else if (err.code === 4001) {
        errorMessage = "Transaction cancelled by user";
      } else if (err.error && err.error.message) {
        errorMessage = err.error.message;
      } else if (err.data && err.data.message) {
        errorMessage = err.data.message;
      } else if (err.message) {
        // Parse JSON RPC errors
        if (err.message.includes('Internal JSON-RPC error')) {
          try {
            // Try to extract the actual error from the JSON-RPC error
            const match = err.message.match(/\{.*\}/);
            if (match) {
              const parsed = JSON.parse(match[0]);
              errorMessage = parsed.error?.message || parsed.message || "RPC Error";
            } else {
              errorMessage = "RPC Error: " + err.message.substring(0, 100);
            }
          } catch (parseError) {
            errorMessage = "Transaction failed: " + err.message.substring(0, 100);
          }
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        if (!window.ethereum) return;

        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length === 0) return; // No connected accounts
        
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setSignerAddress(address);

        const contract = new ethers.Contract(tokenAddress, MobiTokenABI.abi, provider);
        await fetchBalance(provider, contract, address);
        
        // Set up event listeners for wallet changes
        window.ethereum.on('accountsChanged', (accounts) => {
          window.location.reload();
        });
        
        window.ethereum.on('chainChanged', () => {
          window.location.reload();
        });
      } catch (err) {
        console.error("Init error:", err);
      }
    };

    init();
    
    // Clean up event listeners
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', () => {});
        window.ethereum.removeListener('chainChanged', () => {});
      }
    };
  }, []);

  return (
    <Container maxWidth="sm">
      <Box mt={5} display="flex" flexDirection="column" gap={3}>
        <Typography variant="h4" align="center">MOBI Token Transfer</Typography>

        <Typography variant="body1" align="center">
          Connected Wallet: {signerAddress ? `${signerAddress.substring(0, 6)}...${signerAddress.substring(signerAddress.length - 4)}` : "Not connected"}
        </Typography>

        {balance && (
          <Typography variant="body1" align="center">
            Current Balance: {balance} MOBI
          </Typography>
        )}

        <TextField
          label="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          fullWidth
          placeholder="0x..."
        />

        <TextField
          label="Amount (MOBI)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
          type="number"
          inputProps={{ min: "0", step: "0.000001" }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleTransfer}
          disabled={loading || !recipient || !amount}
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : "Transfer Tokens"}
        </Button>

        {error && <Alert severity="error">{error}</Alert>}
        {txHash && (
          <Alert severity="success">
            Transaction Hash: {txHash.substring(0, 10)}...{txHash.substring(txHash.length - 8)}
            <Button 
              variant="text" 
              size="small"
              onClick={() => window.open(`https://polygonscan.com/tx/${txHash}`, '_blank')}
            >
              View on Etherscan
            </Button>
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default TokenTransfer;