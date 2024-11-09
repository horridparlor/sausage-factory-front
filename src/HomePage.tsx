import React, { useState } from 'react';
import { reportTooBrownSausageError, getStatus } from './api';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SausageIcon from './icons/burned-sausage.svg';
import SausageButton from './components/common/SausageButton';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const [isReportButtonPressed, setIsReportButtonPressed] = useState(false);
  const [reportButtonColor, setReportButtonColor] = useState(
    theme.palette.background.default
  );

  const reportTooBrownSausage = async () => {
    try {
      setIsReportButtonPressed(true);
      await reportTooBrownSausageError();
      console.log('Error reported successfully');
      setReportButtonColor(theme.palette.primary.main);
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
        <SausageButton
          onClick={reportTooBrownSausage}
          isPressed={isReportButtonPressed}
          buttonColor={reportButtonColor}
        />

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
