import React from 'react';
import { Button } from '@mui/material';
import { clearWarnings } from '../../hooks/warnings';

const ClearWarningsButton: React.FC = () => {
  const handleClearWarnings = async () => {
    const success = await clearWarnings();
    if (success) {
      console.log('Success clearing ');
    } else {
      console.error('Failed to clear warnings');
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleClearWarnings}>
      Clear All Warnings
    </Button>
  );
};

export default ClearWarningsButton;
