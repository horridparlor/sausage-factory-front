import {Box, Typography} from '@mui/material';
import {BrandColor, TextColor} from "../../types/color";

const PlaygroundPage = () => {

    return (
        <Box sx={{ backgroundColor: BrandColor.STEEL, height: '4rem' }}>
            <Typography sx={{ color: TextColor.WHITE, marginLeft: '1rem', padding: '1rem', fontWeight: 600 }}>
                State Logic
            </Typography>
        </Box>
    );
}

export default PlaygroundPage;
