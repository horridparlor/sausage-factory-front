import { useState } from 'react';
import { Box } from '@mui/material';
import {PanelColor} from "../../../types/color";

const SpacialState = () => {
    const [x, setX] = useState<number>(42);

    return (
        <Box sx={{ backgroundColor: PanelColor.GRAY }}>
            {x}
        </Box>
    );
}

export default SpacialState;
