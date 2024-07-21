import { Box } from '@mui/material';
import PageHeader from "../../components/common/PageHeader";
import SpacialState from "../../components/widgets/playground/SpacialState";
import EmotionalChat from "../../components/widgets/playground/EmotionalChat";

const PlaygroundPage = () => {

    return (
        <Box>
            <PageHeader />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    marginTop: '2rem',
                    gap: 2
                }}
            >
                <SpacialState />
                <EmotionalChat />
            </Box>
        </Box>
    );
}

export default PlaygroundPage;
