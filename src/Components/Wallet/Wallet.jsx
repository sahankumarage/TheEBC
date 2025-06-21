// App.js - Updated with QR Code and Improved UI
import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  AppBar,
  Toolbar,
  CircularProgress,
  Paper,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  IconButton,
  Grid,
} from "@mui/material";
import {
  CopyAll,
  Refresh,
  Send,
  ContentCopy,
  QrCode,
} from "@mui/icons-material";

// Import components
import QRCodeComponent from "./QRCodeComponent";
import TransactionReceipt from "./TransactionReceipt";
import WalletService from "./WalletService";
import { Camera, Close } from '@mui/icons-material';
import QrScanner from 'qr-scanner'; 

function App() {
  // State variables
  const [wallet, setWallet] = useState(null);
  const [balance, setBalance] = useState("0");
  const [privateKey, setPrivateKey] = useState("");
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sendAmount, setSendAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [transactionReceipt, setTransactionReceipt] = useState(null);
  const [receiptDialog, setReceiptDialog] = useState(false);
  const [walletService, setWalletService] = useState(null);
  const [tokenBalance, setTokenBalance] = useState("0");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const [sendTokenAmount, setSendTokenAmount] = useState("");
  const [isSendingToken, setIsSendingToken] = useState(false);
  const MOBI_TOKEN_ADDRESS = "0x296Cb9090Eb49f259E21CFD8eD90F2cf461555e8";
    const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState(null);
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);

    const startScanner = async () => {
    setScanError(null);
    setIsScanning(true);
    
    try {
      // Make sure video element is available before proceeding
      if (!videoRef.current) return;
      
      // Create QR scanner instance
      qrScannerRef.current = new QrScanner(
        videoRef.current,
        result => {
          const scannedValue = result.data;
          
          // Validate if the scanned value is an Ethereum address
          if (scannedValue.startsWith('0x') && scannedValue.length === 42) {
            setRecipientAddress(scannedValue);
            stopScanner();
          } else {
            setScanError('Invalid Ethereum address QR code. Please scan a valid address.');
          }
        },
        {
          // QR Scanner options
          highlightScanRegion: true,
          highlightCodeOutline: true,
          maxScansPerSecond: 1,
          returnDetailedScanResult: true,
        }
      );
      
      // Start scanning
      await qrScannerRef.current.start();
      
    } catch (error) {
      console.error("Error accessing camera:", error);
      
      if (error.name === 'NotAllowedError') {
        setScanError('Camera permission denied. Please allow camera access to scan QR codes.');
      } else if (error.name === 'NotFoundError') {
        setScanError('No camera found on this device.');
      } else {
        setScanError(`Error accessing camera: ${error.message}`);
      }
    }
  };


  // Initialize wallet service on component mount
  useEffect(() => {
    const service = new WalletService();
    setWalletService(service);
    setProvider(service.provider);
  }, []);

  const fetchTokenBalance = async () => {
    if (!walletService || !wallet) return;

    try {
      const tokenAddress = "0x296Cb9090Eb49f259E21CFD8eD90F2cf461555e8"; // MOBI token address
      const balance = await walletService.getTokenBalance(
        wallet.address,
        tokenAddress
      );
      setTokenBalance(balance);
    } catch (error) {
      console.error("Error fetching token balance:", error);
    }
  };

  const sendTokenTransaction = async () => {
    try {
      setLoading(true);
      setIsSendingToken(true);

      console.log("Sending MOBI...");

      // Validate inputs before sending
      if (!recipientAddress || !ethers.utils.isAddress(recipientAddress)) {
        throw new Error("Invalid recipient address");
      }

      if (!sendTokenAmount || parseFloat(sendTokenAmount) <= 0) {
        throw new Error("Invalid amount");
      }

      const tx = await walletService.sendToken(
        wallet,
        recipientAddress,
        MOBI_TOKEN_ADDRESS,
        sendTokenAmount
      );

      console.log("Transaction submitted:", tx.hash);
      showSnackbar(
        `Transaction submitted: ${tx.hash.substring(0, 10)}...`,
        "info"
      );

      // Wait for transaction to be mined
      const receipt = await tx.wait();
      console.log("Transaction mined:", receipt);
      showSnackbar("Token transfer successful!", "success");

      // Reset form or update UI as needed
      setRecipientAddress("");
      setSendTokenAmount("");
    } catch (error) {
      console.error("Full error:", error);

      // Handle specific error cases
      if (error.code === "ACTION_REJECTED") {
        showSnackbar("Transaction rejected by user", "warning");
      } else if (error.code === "INSUFFICIENT_FUNDS") {
        showSnackbar("Insufficient funds for transfer", "error");
      } else if (error.code === "TRANSACTION_REPLACED") {
        showSnackbar("Transaction replaced or cancelled", "warning");
      } else {
        showSnackbar(`Failed: ${error.message || "Unknown error"}`, "error");
      }
    } finally {
      setLoading(false);
      setIsSendingToken(false);
    }
  };

  // Initialize wallet from localStorage if available
  useEffect(() => {
    if (!walletService) return;

    const savedPrivateKey = localStorage.getItem("polygonWalletPrivateKey");
    if (savedPrivateKey) {
      try {
        const wallet = walletService.importWallet(savedPrivateKey);
        setWallet(wallet);
        setPrivateKey(wallet.privateKey);
      } catch (error) {
        console.error("Error loading saved wallet:", error);
        localStorage.removeItem("polygonWalletPrivateKey");
      }
    }
  }, [walletService]);

  const stopScanner = () => {
    if (qrScannerRef.current) {
      qrScannerRef.current.stop();
      qrScannerRef.current = null;
    }
    
    setIsScanning(false);
    setScanError(null);
  };

  useEffect(() => {
    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.stop();
      }
    };
  }, []);

  // Fetch wallet balance and transaction history when wallet changes
  useEffect(() => {
    if (wallet && walletService) {
      fetchBalance();
      fetchTokenBalance();
      fetchTransactionHistory();
    }
  }, [wallet, walletService]);

  // Create a new random wallet
  const createWallet = async () => {
    if (!walletService) return;

    try {
      setLoading(true);
      const newWallet = walletService.createWallet();
      setWallet(newWallet);
      setPrivateKey(newWallet.privateKey);
      localStorage.setItem("polygonWalletPrivateKey", newWallet.privateKey);
      showSnackbar("New wallet created successfully!", "success");
    } catch (error) {
      console.error("Error creating wallet:", error);
      showSnackbar("Failed to create wallet", "error");
    } finally {
      setLoading(false);
    }
  };

  // Import wallet from private key
  const importWallet = async () => {
    if (!walletService || !privateKey) return;

    try {
      setLoading(true);
      const walletInstance = walletService.importWallet(privateKey);
      setWallet(walletInstance);
      localStorage.setItem(
        "polygonWalletPrivateKey",
        walletInstance.privateKey
      );
      showSnackbar("Wallet imported successfully!", "success");
    } catch (error) {
      console.error("Error importing wallet:", error);
      showSnackbar("Invalid private key", "error");
    } finally {
      setLoading(false);
    }
  };

  // Fetch wallet balance
  const fetchBalance = async () => {
    if (!walletService || !wallet) return;

    try {
      const bal = await walletService.getBalance(wallet.address);
      setBalance(bal);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  // Refresh wallet balance
  const refreshBalance = async () => {
    if (wallet) {
      await fetchBalance();
      showSnackbar("Balance updated", "info");
    }
  };

  // Send MATIC to another address
  const sendTransaction = async () => {
    if (!walletService || !wallet || !recipientAddress || !sendAmount) return;

    try {
      setLoading(true);

      const result = await walletService.sendTransaction(
        wallet,
        recipientAddress,
        sendAmount
      );

      console.log("Transaction sent:", result.hash);

      // Update balance and clear fields
      await fetchBalance();
      setSendAmount("");
      setRecipientAddress("");
      fetchTransactionHistory();

      // Show transaction receipt
      setTransactionReceipt({
        hash: result.hash,
        from: wallet.address,
        to: recipientAddress,
        value: sendAmount,
        gasUsed: result.receipt.gasUsed.toString(),
        effectiveGasPrice: result.receipt.effectiveGasPrice.toString(),
        blockNumber: result.receipt.blockNumber,
      });
      setReceiptDialog(true);

      showSnackbar("Transaction completed successfully!", "success");
    } catch (error) {
      console.error("Transaction failed:", error);
      showSnackbar(error.message || "Transaction failed", "error");
    } finally {
      setLoading(false);
    }
  };

  // Fetch transaction history
  const fetchTransactionHistory = async () => {
    if (!walletService || !wallet) return;

    try {
      // Get API key from env if available
      const apiKey = process.env.REACT_APP_POLYGONSCAN_API_KEY || "";
      const txHistory = await walletService.getTransactionHistory(
        wallet.address,
        apiKey
      );
      setTransactions(txHistory);
    } catch (error) {
      console.error("Error fetching transaction history:", error);
    }
  };

  // Copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showSnackbar("Copied to clipboard!", "success");
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  // Show snackbar message
  const showSnackbar = (message, severity) => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  // Handle closing the snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  // Toggle private key visibility
  const toggleShowPrivateKey = () => {
    setShowPrivateKey(!showPrivateKey);
  };

  // Toggle QR code dialog
  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  // Close transaction receipt dialog
  const closeReceiptDialog = () => {
    setReceiptDialog(false);
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    localStorage.removeItem("polygonWalletPrivateKey");
    setWallet(null);
    setPrivateKey("");
    setBalance("0");
    setTransactions([]);
    showSnackbar("Wallet disconnected", "info");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Polygon Wallet
          </Typography>
          {wallet && (
            <Button color="inherit" onClick={disconnectWallet}>
              Disconnect
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 4 }}>
        {!wallet ? (
          <Paper sx={{ p: 3, mt: 2 }}>
            <Typography variant="h5" gutterBottom>
              Welcome to Your Polygon Wallet
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={createWallet}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Create New Wallet"}
              </Button>
            </Box>

            <Typography variant="body1" gutterBottom sx={{ mt: 3 }}>
              Or import existing wallet:
            </Typography>

            <TextField
              label="Private Key"
              fullWidth
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
              margin="normal"
              type="password"
              helperText="Enter your existing wallet's private key"
              variant="outlined"
            />

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={importWallet}
              disabled={!privateKey || loading}
              sx={{ mt: 1 }}
            >
              {loading ? <CircularProgress size={24} /> : "Import Wallet"}
            </Button>
          </Paper>
        ) : (
          <Box>
            <Paper sx={{ p: 3, mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Wallet Balance</Typography>
                <IconButton
                  onClick={() => {
                    refreshBalance();
                    fetchTokenBalance();
                  }}
                >
                  <Refresh />
                </IconButton>
              </Box>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12}>
                  <Typography variant="h5">{balance} MATIC</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">{tokenBalance} MOBI</Typography>
                </Grid>
              </Grid>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="textSecondary">
                  Wallet Address:
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                  <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
                    {wallet.address}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => copyToClipboard(wallet.address)}
                  >
                    <CopyAll fontSize="small" />
                  </IconButton>
                  <IconButton size="small" onClick={toggleQRCode}>
                    <QrCode fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ display: "flex", mt: 2, gap: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={toggleShowPrivateKey}
                >
                  {showPrivateKey ? "Hide Private Key" : "Show Private Key"}
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={refreshBalance}
                >
                  Refresh Balance
                </Button>
              </Box>

              {showPrivateKey && (
                <Box
                  sx={{ mt: 2, p: 2, bgcolor: "error.light", borderRadius: 1 }}
                >
                  <Typography variant="body2" color="error" fontWeight="bold">
                    ⚠️ Never share your private key with anyone!
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
                      {privateKey}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => copyToClipboard(privateKey)}
                    >
                      <CopyAll fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              )}
            </Paper>

            <Paper sx={{ mb: 2 }}>
              <Tabs
                value={currentTab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                {/* <Tab label="Send" /> */}
                <Tab label="Receive" />
                <Tab label="Send MOBI" />
                <Tab label="Transactions" />
              </Tabs>

              <Box sx={{ p: 3 }}>
                {/* {currentTab === 0 && (
                  <Box>
                    <TextField
                      label="Recipient Address"
                      fullWidth
                      value={recipientAddress}
                      onChange={(e) => setRecipientAddress(e.target.value)}
                      margin="normal"
                      variant="outlined"
                      placeholder="0x..."
                    />

                    <TextField
                      label="Amount (MATIC)"
                      fullWidth
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                      margin="normal"
                      variant="outlined"
                      type="number"
                      InputProps={{ inputProps: { min: 0, step: 0.000001 } }}
                    />

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<Send />}
                      onClick={sendTransaction}
                      disabled={loading || !recipientAddress || !sendAmount}
                      sx={{ mt: 2 }}
                    >
                      {loading ? <CircularProgress size={24} /> : "Send MATIC"}
                    </Button>
                  </Box>
                )} */}

                {currentTab === 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <QRCodeComponent address={wallet.address} size={200} />

                    <Box sx={{ mt: 3, width: "100%" }}>
                      <Typography variant="body2" gutterBottom>
                        Your Wallet Address:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          bgcolor: "grey.100",
                          p: 2,
                          borderRadius: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ wordBreak: "break-all", flexGrow: 1 }}
                        >
                          {wallet.address}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => copyToClipboard(wallet.address)}
                        >
                          <ContentCopy fontSize="small" />
                        </IconButton>
                      </Box>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ mt: 1 }}
                      >
                        Share this address to receive MATIC from others
                      </Typography>
                    </Box>
                  </Box>
                )}

                {currentTab === 1 && (
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Send MOBI Tokens
                    </Typography>

                    <Box sx={{ position: "relative" }}>
                      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <TextField
                          label="Recipient Address"
                          fullWidth
                          value={recipientAddress}
                          onChange={(e) => setRecipientAddress(e.target.value)}
                          margin="normal"
                          variant="outlined"
                          placeholder="0x..."
                        />
                        <IconButton
                          color="primary"
                          onClick={startScanner}
                          sx={{ ml: 1, mb: 1 }}
                          title="Scan QR Code"
                        >
                          <Camera />
                        </IconButton>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <TextField
                          label="Amount"
                          fullWidth
                          value={sendTokenAmount}
                          onChange={(e) => setSendTokenAmount(e.target.value)}
                          margin="normal"
                          variant="outlined"
                          type="number"
                        />
                        <Button
                          size="small"
                          onClick={() => setSendTokenAmount(tokenBalance)}
                          sx={{ mt: 1 }}
                        >
                          Max
                        </Button>
                      </Box>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ mt: 1 }}
                      >
                        Available: {tokenBalance} MOBI
                      </Typography>

                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={sendTokenTransaction}
                        disabled={
                          loading || !recipientAddress || !sendTokenAmount
                        }
                        sx={{ mt: 2 }}
                      >
                        {loading && isSendingToken ? (
                          <CircularProgress size={24} />
                        ) : (
                          "Send MOBI"
                        )}
                      </Button>
                    </Box>

                    {/* QR Scanner Dialog */}
                    <Dialog
                      open={isScanning}
                      onClose={stopScanner}
                      maxWidth="sm"
                      fullWidth
                    >
                      <DialogTitle>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="h6">Scan QR Code</Typography>
                          <IconButton onClick={stopScanner} size="small">
                            <Close />
                          </IconButton>
                        </Box>
                      </DialogTitle>
                      <DialogContent>
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            paddingTop: "100%",
                            bgcolor: "grey.100",
                            borderRadius: 1,
                            overflow: "hidden",
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              border: "2px solid",
                              borderColor: "primary.main",
                              borderRadius: 1,
                              opacity: 0.7,
                            }}
                          />
                          <video
                            ref={videoRef}
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          align="center"
                        >
                          Position the QR code within the frame to scan
                        </Typography>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={stopScanner}>Cancel</Button>
                      </DialogActions>
                    </Dialog>
                  </Box>
                )}

                {currentTab === 2 && (
                  <Box>
                    {transactions.length > 0 ? (
                      <List>
                        {transactions.map((tx, index) => (
                          <React.Fragment key={index}>
                            <ListItem alignItems="flex-start">
                              <ListItemText
                                primary={
                                  <Typography
                                    variant="subtitle2"
                                    color={
                                      tx.type === "in"
                                        ? "success.main"
                                        : "primary"
                                    }
                                  >
                                    {tx.type === "in"
                                      ? "Received MATIC"
                                      : "Sent MATIC"}
                                  </Typography>
                                }
                                secondary={
                                  <React.Fragment>
                                    <Typography
                                      component="span"
                                      variant="body2"
                                    >
                                      {tx.type === "in" ? "From: " : "To: "}
                                      {tx.type === "in"
                                        ? `${tx.from.substring(
                                            0,
                                            6
                                          )}...${tx.from.substring(
                                            tx.from.length - 4
                                          )}`
                                        : `${tx.to.substring(
                                            0,
                                            6
                                          )}...${tx.to.substring(
                                            tx.to.length - 4
                                          )}`}
                                    </Typography>
                                    <br />
                                    <Typography
                                      component="span"
                                      variant="body2"
                                      fontWeight="bold"
                                    >
                                      {tx.value} MATIC
                                    </Typography>
                                    <br />
                                    <Typography
                                      component="span"
                                      variant="body2"
                                      color="textSecondary"
                                    >
                                      {new Date(tx.timeStamp).toLocaleString()}
                                    </Typography>
                                    <br />
                                    <Typography
                                      component="span"
                                      variant="body2"
                                      color="textSecondary"
                                    >
                                      Tx: {tx.hash}
                                    </Typography>
                                  </React.Fragment>
                                }
                              />
                            </ListItem>
                            {index < transactions.length - 1 && <Divider />}
                          </React.Fragment>
                        ))}
                      </List>
                    ) : (
                      <Typography variant="body1" align="center" sx={{ py: 3 }}>
                        No transaction history found
                      </Typography>
                    )}
                  </Box>
                )}
              </Box>
            </Paper>
          </Box>
        )}
      </Container>

      {/* QR Code Dialog */}
      <Dialog open={showQRCode} onClose={toggleQRCode}>
        <DialogTitle>
          <Typography variant="h6">Wallet Address QR Code</Typography>
        </DialogTitle>
        <DialogContent>
          {wallet && <QRCodeComponent address={wallet.address} size={250} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleQRCode}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Transaction Receipt Dialog */}
      <TransactionReceipt
        open={receiptDialog}
        onClose={closeReceiptDialog}
        transaction={transactionReceipt}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;
