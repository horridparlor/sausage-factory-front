import React, { useState } from 'react';
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
  const reportTooBrownSausage = async (id: number, warningTypeName: string) => {
    try {
      const response = await postWarning({
        id: id,
        warningTypeName: warningTypeName,
      });
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
  const warningButtons = [
    { id: 1, warningTypeName: 'burnt' },
    { id: 2, warningTypeName: 'Too Light' },
    { id: 3, warningTypeName: 'Too Heavy' },
    { id: 4, warningTypeName: 'Inconsistent' },
  ];

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
          width: '80%',
          gap: theme.spacing(3),
        }}
      >
        {warningButtons.map(button => (
          <SausageButton
            key={button.id}
            onClick={() =>
              reportTooBrownSausage(button.id, button.warningTypeName)
            }
            isPressed={isReportButtonPressed}
            buttonColor={reportButtonColor}
            icon={SausageIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
