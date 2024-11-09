import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import SausageIcon from './icons/burned-sausage.svg';
import SausageButton from './components/common/SausageButton';
import ClearWarningsButton from './components/common/ClearWarnings';
import { postWarning } from './hooks/warnings';
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
    { id: 1, warningTypeName: 'Burned' },
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
