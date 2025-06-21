// TransactionReceipt.js - Display transaction details
import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  Typography, 
  Box, 
  Divider, 
  IconButton,
  Link
} from '@mui/material';
import { ContentCopy, Close } from '@mui/icons-material';

const TransactionReceipt = ({ open, onClose, transaction }) => {
  if (!transaction) return null;
  
  const { hash, from, to, value, gasUsed, effectiveGasPrice, blockNumber } = transaction;
  
  // Calculate transaction fee (gas used * gas price)
  const txFee = (gasUsed && effectiveGasPrice) 
    ? (parseInt(gasUsed) * parseInt(effectiveGasPrice) / 1e18).toFixed(8)
    : "N/A";
  
  // Handle copy to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  
  // Format address for display
  const formatAddress = (address) => {
    if (!address) return "N/A";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  // Create Polygonscan link
  const getPolygonscanLink = (hash) => {
    // Use mainnet or testnet as needed
    return `https://polygonscan.com/tx/${hash}`;
    // For Mumbai testnet: return `https://mumbai.polygonscan.com/tx/${hash}`;
  };
  
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{ sx: { borderRadius: 2 } }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Transaction Receipt</Typography>
        <IconButton onClick={onClose} size="small">
          <Close />
        </IconButton>
      </DialogTitle>
      
      <DialogContent>
        <Box sx={{ mb: 2, p: 2, bgcolor: 'success.light', color: 'success.contrastText', borderRadius: 1 }}>
          <Typography variant="subtitle1" align="center">Transaction Successful</Typography>
        </Box>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Transaction Hash
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
              {hash}
            </Typography>
            <IconButton size="small" onClick={() => copyToClipboard(hash)}>
              <ContentCopy fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="textSecondary">Status:</Typography>
          <Typography variant="body2">Confirmed</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="textSecondary">Block:</Typography>
          <Typography variant="body2">{blockNumber || "Pending"}</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="textSecondary">From:</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2">{formatAddress(from)}</Typography>
            <IconButton size="small" onClick={() => copyToClipboard(from)}>
              <ContentCopy fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="textSecondary">To:</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2">{formatAddress(to)}</Typography>
            <IconButton size="small" onClick={() => copyToClipboard(to)}>
              <ContentCopy fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="textSecondary">Amount:</Typography>
          <Typography variant="body2" fontWeight="bold">{value} MATIC</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="textSecondary">Transaction Fee:</Typography>
          <Typography variant="body2">{txFee} MATIC</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="textSecondary">Gas Used:</Typography>
          <Typography variant="body2">{gasUsed || "N/A"}</Typography>
        </Box>
        
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Link
            href={getPolygonscanLink(hash)}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            View on Polygonscan
          </Link>
        </Box>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TransactionReceipt;