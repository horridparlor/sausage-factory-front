import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SausageIcon from './icons/burned-sausage.svg';
import { useWarnings, clearWarnings } from './hooks/warnings';
import ArrowWithText from './components/common/Arrow';

interface ErrorData {
  icon: string;
  message: string;
  location: string;
}

const DashBoard: React.FC = () => {
  const theme = useTheme();
  const [errorData, setErrorData] = useState<ErrorData | null>(null);
  // Use the warnings hook
  const { warnings, isLoading, error } = useWarnings();
  useEffect(() => {
    if (!isLoading && warnings.length > 0) {
      // Map the first warning to errorData format (or adjust as needed)
      const firstWarning = warnings[0];
      setErrorData({
        icon: SausageIcon,
        message: firstWarning.warningTypeName,
        location: firstWarning.subprocessName,
      });
    } else {
      const timer = setTimeout(() => {
        setErrorData(null);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (error) {
      console.error('Error fetching warnings:', error);
    }
  }, [warnings, isLoading, error]);

  const stages = ['A', 'B', 'C', 'D'];
  console.log(errorData);
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
      <Box
        sx={{
          height: '20%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ArrowWithText />
      </Box>
      {/* Production Flow Line */}
      <Box
        display="flex"
        alignItems="center"
        width={'100%'}
        height={'50%'}
        gap={4}
        position="relative"
      >
        {stages.map(stage => (
          <Box
            key={stage}
            display="flex"
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              border: '2px solid',
              borderColor: theme.palette.primary.main,
              borderRadius: '8px',
              height: '70%',
              width: '70%',
              backgroundColor:
                stage === errorData?.location
                  ? theme.palette.productionFlow.activeProblem
                  : theme.palette.productionFlow.default,
            }}
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
            src={errorData.icon}
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
