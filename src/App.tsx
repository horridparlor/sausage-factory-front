import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {theme} from "./styles/Theme";
import PlaygroundPage from "./pages/playground";
import './styles/montserrat.css';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/playground" />} />
                    <Route path="/playground" element={<PlaygroundPage />} />
                </Routes>
            </Router>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
            />
        </ThemeProvider>
    );
};

export default App;
