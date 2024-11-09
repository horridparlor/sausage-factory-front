import React from 'react';
import { Button } from '@mui/material';
import { clearWarnings } from '../../hooks/warnings';

type ClearWarningsProps = {
  onClick: (value: boolean) => void;
};

const ClearWarningsButton: React.FC<ClearWarningsProps> = props => {
  const { onClick } = props;
  const handleClearWarnings = async () => {
    const success = await clearWarnings();
    if (success) {
      console.log('Success clearing ');
    } else {
      console.error('Failed to clear warnings');
    }
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => {
        onClick(false);
        handleClearWarnings();
      }}
      sx={{ marginBottom: 5 }}
    >
      Clear All Warnings
    </Button>
  );
};

export default ClearWarningsButton;
