import { useState } from 'react';
import {Box, useMediaQuery} from '@mui/material';
import {PanelColor, TextColor} from "../../../types/color";
import {theme} from "../../../styles/Theme";

const EmotionalChat = () => {
    const [x, setX] = useState<number>(42);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{
            backgroundColor: PanelColor.DARKER_GREY,
            borderRadius: `${isMobile ? '0' : '0.6rem'} 0 0 0`
        }}>
            <Box sx={{
                backgroundColor: PanelColor.DARK_GREY,
                width: '30rem',
                maxWidth: '100vw',
                height: 'calc(100vh - 6.6rem)',
                color: TextColor.WHITE,
                margin: '0.6rem',
                marginRight: '0rem',
                marginBottom: '0rem',
                padding: '0.4rem',
                borderRadius: `${isMobile ? '0' : '0.6rem'} 0 0 0`
            }}>
                {x}
            </Box>
        </Box>
    );
}

export default EmotionalChat;
