import { createTheme, PaletteOptions } from '@mui/material/styles';

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
      main: '#001f3f', // Navy blue
      dark: '#00132b', // Darker navy blue
    },
    secondary: {
      main: '#19857b',
      dark: '#126158', // Darker green
    },
    info: {
      main: '#2196f3',
      dark: '#1769aa', // Darker blue
    },
    warning: {
      main: '#ff9800',
      dark: '#b26500', // Darker orange
    },
    error: {
      main: '#f44336',
      dark: '#ba000d', // Darker red
    },
    tooBrown: {
      main: '#8B4513', // Standard "too brown" color
      dark: '#5a2d0c', // Darker brown
    },
    background: {
      default: '#f4f6f9',
      paper: '#e8ebed',
    },
    productionFlow: {
      default: '#d3f9d8',
      activeProblem: '#ff4d4d',
    },
  },
});
