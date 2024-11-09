import React from 'react';
import { reportTooBrownSausageError, getStatus } from './api';
import { Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SausageIcon from './icons/sausage.svg';

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          //backgroundColor: 'orange',
          backgroundColor: 'transparent',
          height: '100%',
          width: '100%',
          gap: theme.spacing(3),
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{
            width: '30%',
            height: '30%',
            backgroundColor: theme.palette.background.default,
            borderColor: theme.palette.primary.main,
            borderWidth: '5px',
            borderStyle: 'solid',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={reportTooBrownSausage}
        >
          <img
            src={SausageIcon}
            alt="Sausage Icon"
            style={{
              width: '80%',
              height: '80%',
              backgroundColor: theme.palette.tooBrown.main,
            }}
          />
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{
            width: '30%',
            height: '30%',
            backgroundColor: theme.palette.background.default,
            borderColor: theme.palette.primary.main,
            borderWidth: '5px',
            borderStyle: 'solid',
          }}
          onClick={getSausageStatus}
        >
          <img
            src={SausageIcon}
            alt="Sausage Icon"
            style={{ width: '80%', height: '80%' }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
