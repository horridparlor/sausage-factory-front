import React from 'react';
import { Button, Typography, useTheme } from '@mui/material';

interface SausageButtonProps {
  onClick: () => void;
  isPressed?: boolean;
  buttonColor?: string;
  icon: string;
  header: string;
}

const SausageButton: React.FC<SausageButtonProps> = ({
  onClick,
  isPressed = false,
  buttonColor,
  icon,
  header,
}) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        width: '50%',
        height: '50%',
        backgroundColor: isPressed
          ? theme.palette.primary.dark
          : buttonColor || theme.palette.background.default,
        borderColor: theme.palette.primary.main,
        borderWidth: '2px',
        flexDirection: 'column',
        borderStyle: 'solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        boxShadow: `
          0px 4px 8px rgba(0, 0, 0, 0.1), /* Soft shadow */
          inset 0px 1px 2px rgba(255, 255, 255, 0.6) /* Inner shadow */
        `,
        transition: 'box-shadow 0.3s, transform 0.1s',
      }}
      onClick={onClick}
    >
      <Typography
        color={theme.palette.primary.main}
        variant="h5"
        sx={{ fontWeight: 'bold' }}
      >
        {header}{' '}
      </Typography>
      <img
        src={icon}
        alt="Sausage Icon"
        style={{
          width: '80%',
          height: '80%',
        }}
      />
    </Button>
  );
};

export default SausageButton;
