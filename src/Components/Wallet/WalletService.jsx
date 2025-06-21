// WalletService.js - Handle wallet-related functionality
import { ethers } from "ethers";

class WalletService {
  constructor(rpcUrl = "https://polygon-rpc.com") {
    this.provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  }

  async getTokenBalance(walletAddress, tokenAddress) {
    // The ERC-20 ABI fragment for balanceOf
    const abi = ["function balanceOf(address owner) view returns (uint256)"];

    // Create contract instance
    const tokenContract = new ethers.Contract(tokenAddress, abi, this.provider);

    try {
      // Call balanceOf function
      const balance = await tokenContract.balanceOf(walletAddress);

      // Format the balance (assuming 18 decimals like most tokens)
      return ethers.utils.formatUnits(balance, 18);
    } catch (error) {
      console.error("Error fetching token balance:", error);
      throw error;
    }
  }

  // In your WalletService
  async sendToken(wallet, recipient, tokenAddress, amount) {
  try {
    const abi = [
      "function transfer(address to, uint256 amount) returns (bool)",
      "function decimals() view returns (uint8)",
    ];

    const tokenContract = new ethers.Contract(
      tokenAddress,
      abi,
      wallet.connect(this.provider)
    );

    // Get decimals
    const decimals = await tokenContract.decimals();
    const amountInWei = ethers.utils.parseUnits(amount.toString(), decimals);

    // Get current fee data from the network
    const feeData = await this.provider.getFeeData();
    
    // Ensure we meet minimum gas price requirements
    // The error indicates we need at least 25 Gwei
    const minGasPrice = ethers.utils.parseUnits("100", "gwei");
    
    // Use the higher of: network suggested fee or minimum required fee
    const maxFeePerGas = feeData.maxFeePerGas && 
      feeData.maxFeePerGas.gt(minGasPrice) ? 
      feeData.maxFeePerGas : 
      minGasPrice.mul(120).div(100); // 20% above minimum
      
    const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas && 
      feeData.maxPriorityFeePerGas.gt(minGasPrice) ? 
      feeData.maxPriorityFeePerGas : 
      minGasPrice;

    // Estimate gas first
    const gasEstimate = await tokenContract.estimateGas.transfer(
      recipient,
      amountInWei
    );

    // Send with proper gas settings
    const tx = await tokenContract.transfer(recipient, amountInWei, {
      gasLimit: gasEstimate.mul(120).div(100), // Add 20% buffer
      maxFeePerGas,
      maxPriorityFeePerGas
    });

    return tx; // Return the transaction object, not the receipt
  } catch (error) {
    console.error("Error in sendToken:", error);
    throw error; // Re-throw to handle in the calling function
  }
}
  // Create a new random wallet
  createWallet() {
    const wallet = ethers.Wallet.createRandom().connect(this.provider);
    return wallet;
  }

  // Import wallet from private key
  importWallet(privateKey) {
    try {
      // Add 0x prefix if missing
      if (!privateKey.startsWith("0x")) {
        privateKey = "0x" + privateKey;
      }

      const wallet = new ethers.Wallet(privateKey, this.provider);
      return wallet;
    } catch (error) {
      throw new Error("Invalid private key");
    }
  }

  // Get wallet balance
  async getBalance(address) {
    try {
      const balance = await this.provider.getBalance(address);
      return ethers.utils.formatEther(balance); // Convert from wei to MATIC
    } catch (error) {
      throw new Error("Failed to fetch balance");
    }
  }

  // Estimate gas for a transaction
  async estimateGas(tx) {
    try {
      const gasEstimate = await this.provider.estimateGas(tx);
      // Add 10% buffer to gas estimate
      return gasEstimate.mul(110).div(100);
    } catch (error) {
      throw new Error("Failed to estimate gas");
    }
  }

  // Get current gas price
  async getGasPrice() {
    try {
      const gasPrice = await this.provider.getGasPrice();
      // Add 10% buffer to gas price
      return gasPrice.mul(110).div(100);
    } catch (error) {
      throw new Error("Failed to get gas price");
    }
  }

  // Send a transaction
  async sendTransaction(wallet, to, amountInMatic) {
    try {
      // Basic validation
      if (!ethers.utils.isAddress(to)) {
        throw new Error("Invalid recipient address");
      }

      // Convert MATIC to wei
      const value = ethers.utils.parseEther(amountInMatic);

      // Get current gas price
      const gasPrice = await this.getGasPrice();

      // Create transaction object
      const tx = {
        to,
        value,
        gasPrice,
      };

      // Get gas estimate
      const gasLimit = await this.estimateGas(tx);
      tx.gasLimit = gasLimit;

      // Check if user has enough balance for the transfer including gas
      const balance = await this.provider.getBalance(wallet.address);
      const gasCost = gasPrice.mul(gasLimit);
      const totalCost = value.add(gasCost);

      if (balance.lt(totalCost)) {
        throw new Error("Insufficient balance for gas + amount");
      }

      // Send transaction
      const transaction = await wallet.sendTransaction(tx);

      // Wait for one confirmation
      const receipt = await transaction.wait(1);

      return {
        hash: transaction.hash,
        receipt,
      };
    } catch (error) {
      throw new Error(error.message || "Transaction failed");
    }
  }

  // Get transaction history using Polygonscan API
  async getTransactionHistory(address, apiKey) {
    try {
      // In a real app, you would call the Polygonscan API
      // Example (not implemented here):
      /*
      const response = await fetch(
        `https://api.polygonscan.com/api?module=account&action=txlist&address=${address}&sort=desc&apikey=${apiKey}`
      );
      const data = await response.json();
      
      if (data.status === "1") {
        return data.result.map(tx => ({
          hash: tx.hash,
          from: tx.from,
          to: tx.to,
          value: ethers.utils.formatEther(tx.value),
          timeStamp: parseInt(tx.timeStamp) * 1000, // Convert to milliseconds
          type: tx.from.toLowerCase() === address.toLowerCase() ? "out" : "in"
        }));
      } else {
        return [];
      }
      */

      // For demonstration purposes, return mock data
      return [
        {
          hash: "0x3a4eb5f9c3a4eb5f9c3a4eb5f9c3a4eb5f9c3a4eb5f9c3a4eb5f9c3a4eb5f9c",
          from: address,
          to: "0x1234567890123456789012345678901234567890",
          value: "0.01",
          timeStamp: Date.now() - 86400000, // 1 day ago
          type: "out",
        },
        {
          hash: "0x7c2d9e4a7c2d9e4a7c2d9e4a7c2d9e4a7c2d9e4a7c2d9e4a7c2d9e4a7c2d9e4a",
          from: "0xabcdef1234567890abcdef1234567890abcdef12",
          to: address,
          value: "0.5",
          timeStamp: Date.now() - 172800000, // 2 days ago
          type: "in",
        },
        {
          hash: "0x9f8e7d6c5b4a3f2e1d9f8e7d6c5b4a3f2e1d9f8e7d6c5b4a3f2e1d9f8e7d6c5b",
          from: "0x0987654321098765432109876543210987654321",
          to: address,
          value: "0.25",
          timeStamp: Date.now() - 259200000, // 3 days ago
          type: "in",
        },
      ];
    } catch (error) {
      console.error("Failed to fetch transaction history:", error);
      return [];
    }
  }

  // Check if an Ethereum address is valid
  isValidAddress(address) {
    return ethers.utils.isAddress(address);
  }
}

export default WalletService;
