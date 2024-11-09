import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/Theme';
import './styles/montserrat.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import DashBoard from './DashBoard';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </ThemeProvider>
  );
}
