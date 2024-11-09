import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import SausageIcon from './icons/burned-sausage.svg';

interface ErrorData {
  icon: string;
  message: string;
  location: string;
}

const DashBoard: React.FC = () => {
  const theme = useTheme();
  const [errorData, setErrorData] = useState<ErrorData | null>(null);

  useEffect(() => {
    const fetchErrorData = async () => {
      try {
        //const data = await reportTooBrownSausageError();
        setErrorData({
          icon: SausageIcon,
          message: 'Burned Sausage',
          location: 'A',
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchErrorData();
  }, []);

  const stages = ['A', 'B', 'C', 'D'];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor={theme.palette.background.default}
      padding={4}
    >
      {/* Production Flow Line */}
      <Box display="flex" alignItems="center" gap={4} position="relative">
        {stages.map(stage => (
          <Box
            key={stage}
            display="flex"
            flexDirection="column"
            alignItems="center"
            border="2px solid"
            borderColor={theme.palette.primary.main}
            borderRadius="8px"
          >
            {/* Stage Label */}
            <Typography variant="h6" color="textPrimary">
              {stage}
            </Typography>

            {/* Line connecting stages */}
            {
              <Box
                width="80px"
                height="2px"
                bgcolor={theme.palette.primary.main}
                marginTop={1}
                marginBottom={1}
              />
            }

            {/* Error Icon and Message if the error stage matches */}
          </Box>
        ))}
      </Box>
      {errorData && (
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <img
            src={SausageIcon}
            alt="Burned Sausage Icon"
            style={{ width: '40px', height: '40px' }}
          />
          <Typography variant="body2" color="error" mt={1}>
            {errorData.message}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Location: {errorData.location}
          </Typography>
        </Box>
      )}
      {/* Loading or no error */}
      {!errorData && (
        <Typography variant="h6" color="textSecondary" mt={4}>
          No errors reported in production flow.
        </Typography>
      )}
    </Box>
  );
};

export default DashBoard;
