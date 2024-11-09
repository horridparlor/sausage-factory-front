import React, { useState } from 'react';
import { reportTooBrownSausageError, getStatus } from './api';
import { Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SausageIcon from './icons/burned-sausage.svg';
import SausageButton from './components/common/SausageButton';
import ClearWarningsButton from './components/common/ClearWarnings';
import { postWarning, useWarnings, clearWarnings } from './hooks/warnings';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const [isReportButtonPressed, setIsReportButtonPressed] = useState(false);
  const [reportButtonColor, setReportButtonColor] = useState(
    theme.palette.background.default
  );
  const { warnings, isLoading, error } = useWarnings();
  const reportTooBrownSausage = async () => {
    try {
      const response = await postWarning({ id: 1, warningTypeName: 'burned' });
      if (response) {
        setIsReportButtonPressed(true);
        setReportButtonColor(theme.palette.primary.main);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getSausageStatus = () => {
    return warnings.some(warning => warning.warningTypeName === 'burned')
      ? 'Critical'
      : 'Normal';
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
      <ClearWarningsButton />
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
          onClick={() => console.log(getSausageStatus())}
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
