import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tooBrown: Palette['primary'];
  }
  interface PaletteOptions {
    tooBrown?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Sahadeva',
  },
  palette: {
    primary: {
      main: '#001f3f',
    },
    secondary: {
      main: '#19857b',
    },
    info: {
      main: '#2196f3',
    },
    warning: {
      main: '#ff9800',
    },
    error: {
      main: '#f44336',
    },
    tooBrown: {
      main: '#8B4513',
    },
    background: {
      default: '#f4f6f9',
      paper: '#e8ebed',
    },
  },
});
