import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import SausageIcon from './icons/burned-sausage.svg';
import RedScale from './icons/red_scale.svg';
import SausageButton from './components/common/SausageButton';
import BadQualityIcon from './icons/bad_quality.svg';
import ClearWarningsButton from './components/common/ClearWarnings';
import { postWarning } from './hooks/warnings';
import { Typography } from '@mui/material';
import { authenticate, getSystemUser } from './hooks/userAuth.ts';
import { toast } from 'react-toastify';

const autoAuth = async (force: boolean = false) => {
  if (getSystemUser() && !force) {
    return;
  }
  const auth = await authenticate(
    import.meta.env.VITE_REACT_APP_USERNAME ?? '',
    import.meta.env.VITE_REACT_APP_PASSWORD ?? ''
  );
  if (auth) {
    toast.success('Authenticated');
  } else {
    toast.error('Authentication failed');
  }
};

const HomePage: React.FC = () => {
  const theme = useTheme();
  const [isReportButtonPressed, setIsReportButtonPressed] = useState(false);
  const [reportButtonColor, setReportButtonColor] = useState(
    theme.palette.background.default
  );
  const reportTooBrownSausage = async (id: number, warningTypeName: string) => {
    try {
      await autoAuth();
      const response = await postWarning({
        id: id,
        name: warningTypeName,
      });
      if (response) {
        setIsReportButtonPressed(true);
        setReportButtonColor(theme.palette.primary.main);
      } else {
        await autoAuth(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const warningButtons = [
    { id: 1, warningTypeName: 'Burnt', icon: SausageIcon },
    { id: 2, warningTypeName: 'Underweight', icon: RedScale },
    { id: 4, warningTypeName: 'Bad Quality', icon: BadQualityIcon },
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
      <Typography
        variant="h2"
        component="h2"
        color={theme.palette.primary.main}
        sx={{ marginTop: 3, fontWeight: 'bold' }}
      >
        Report Error
      </Typography>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          //backgroundColor: 'orange',
          backgroundColor: 'transparent',
          height: '100%',
          width: '90%',
          gap: theme.spacing(3),
        }}
      >
        {warningButtons.map(button => (
          <SausageButton
            key={button.id}
            header={button.warningTypeName}
            onClick={() =>
              reportTooBrownSausage(button.id, button.warningTypeName)
            }
            isPressed={isReportButtonPressed}
            buttonColor={reportButtonColor}
            icon={button.icon}
          />
        ))}
      </div>
      <ClearWarningsButton />
    </div>
  );
};

export default HomePage;
