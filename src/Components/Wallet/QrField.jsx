import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
  IconButton,
  Paper,
  Grid
} from '@mui/material';
import { Camera, Close } from 'lucide-react';

const TokenTransferForm = () => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [sendTokenAmount, setSendTokenAmount] = useState('');
  const [tokenBalance, setTokenBalance] = useState('100'); // Example balance
  const [isScanning, setIsScanning] = useState(false);
  const videoRef = useRef(null);

  // Function to start QR scanning
  const startScanner = async () => {
    setIsScanning(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        
        // Setup a simple scanning mechanism
        const checkVideoFrame = () => {
          if (videoRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
            // In a real implementation, we would process the video frame here
            // For demo purposes, let's simulate finding a QR code after 3 seconds
            setTimeout(() => {
              // Simulate detecting a QR code with an Ethereum address
              const mockAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";
              setRecipientAddress(mockAddress);
              stopScanner();
            }, 3000);
          } else {
            requestAnimationFrame(checkVideoFrame);
          }
        };
        
        checkVideoFrame();
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      setIsScanning(false);
    }
  };

  // Function to stop QR scanning
  const stopScanner = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Send MOBI Tokens
      </Typography>
      
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
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
            onClick={isScanning ? stopScanner : startScanner}
            sx={{ ml: 1, mb: 1 }}
          >
            <Camera size={24} />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
        
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }}
        >
          Send Tokens
        </Button>
      </Box>

      {/* QR Scanner Modal */}
      <Modal
        open={isScanning}
        onClose={stopScanner}
        aria-labelledby="qr-scanner-modal"
        aria-describedby="modal for scanning qr codes"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 },
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" component="h2">
              Scan QR Code
            </Typography>
            <IconButton onClick={stopScanner} size="small">
              <Close />
            </IconButton>
          </Box>
          
          <Box sx={{ 
            position: 'relative', 
            width: '100%', 
            paddingTop: '100%', 
            bgcolor: 'grey.100',
            borderRadius: 1,
            overflow: 'hidden',
            mb: 2
          }}>
            <Box sx={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0,
              border: '2px solid',
              borderColor: 'primary.main',
              borderRadius: 1,
              opacity: 0.7
            }} />
            <video 
              ref={videoRef}
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
          
          <Typography variant="body2" color="text.secondary" align="center">
            Position the QR code within the frame to scan
          </Typography>
        </Box>
      </Modal>
    </Paper>
  );
};

export default TokenTransferForm;