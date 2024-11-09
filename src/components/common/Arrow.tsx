import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ArrowWithText: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '80%',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main} 80%, transparent)`, // Arrow effect
        clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)', // Right-pointing arrow shape
        bgcolor: theme.palette.primary.main,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          position: 'absolute',
          color: theme.palette.primary.contrastText,
        }}
      >
        Production Flow
      </Typography>
    </Box>
  );
};

export default ArrowWithText;
