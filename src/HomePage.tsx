import React from 'react';
import { reportTooBrownSausageError, getStatus } from './api';
import { Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const HomePage: React.FC = () => {
  const theme = useTheme();

  const reportTooBrownSausage = async () => {
    try {
      await reportTooBrownSausageError();
      console.log('Error reported successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const getSausageStatus = async () => {
    try {
      const status = await getStatus();
      console.log(status);
      console.log('Succesful status call');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div style={{ padding: theme.spacing(4) }}>
      <Typography
        variant="h1"
        color="primary"
        style={{ fontFamily: theme.typography.fontFamily }}
      >
        Welcome to the Sausage Factory Dashboard!
      </Typography>
      <h1>Welcome to the Sausage Factory Dashboard!</h1>
      <p>Automate your sausage production with ease!</p>
      <Button
        variant="contained"
        color="error" // Use theme-defined error color
        style={{ marginTop: theme.spacing(2) }}
        onClick={reportTooBrownSausage}
      >
        Report Too Brown Sausage
      </Button>
      <Button
        variant="contained"
        color="error" // Use theme-defined error color
        style={{ marginTop: theme.spacing(2) }}
        onClick={getSausageStatus}
      >
        Get Status
      </Button>
    </div>
  );
};

export default HomePage;
