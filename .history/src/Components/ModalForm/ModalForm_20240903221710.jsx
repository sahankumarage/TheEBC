import React, { useState } from 'react';
import { Button, Modal, Box } from '@mui/material';
import GoogleFormEmbedded from './GoogleFormEmbedded'; // Ensure this component exists

// Modal Component
export default FormModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}>
        <GoogleFormEmbedded />
      </Box>
    </Modal>
  );
};