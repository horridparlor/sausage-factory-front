import React from 'react';
import { Button, useTheme } from '@mui/material';
import SausageIcon from '../../icons/burned-sausage.svg';

interface SausageButtonProps {
  onClick: () => void;
  isPressed?: boolean;
  buttonColor?: string;
  icon: string;
}

const SausageButton: React.FC<SausageButtonProps> = ({
  onClick,
  isPressed = false,
  buttonColor,
  icon,
}) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        width: '30%',
        height: '30%',
        backgroundColor: isPressed
          ? theme.palette.primary.dark
          : buttonColor || theme.palette.background.default,
        borderColor: theme.palette.primary.main,
        borderWidth: '2px',
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
