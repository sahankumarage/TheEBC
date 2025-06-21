// QRCodeComponent.js - Generate scannable QR code for wallet address
import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Box, Typography, Paper } from '@mui/material';

const QRCodeComponent = ({ address, size = 200 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!address || !canvasRef.current) return;

    // Generate QR code and draw to canvas
    QRCode.toCanvas(canvasRef.current, address, {
      width: size,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    }, function (error) {
      if (error) console.error(error);
    });
  }, [address, size]);

  if (!address) return null;

  return (
    <Paper elevation={2} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="subtitle1" gutterBottom>
        Scan to send MATIC to this address
      </Typography>
      <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1 }}>
        <canvas ref={canvasRef} width={size} height={size} />
      </Box>
      <Typography variant="caption" sx={{ mt: 1, textAlign: 'center' }}>
        {address.substring(0, 6)}...{address.substring(address.length - 4)}
      </Typography>
    </Paper>
  );
};

export default QRCodeComponent;
