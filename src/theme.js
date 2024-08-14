import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#134b8a',
      dark: '#0f1e56',
      light: '#c4d3e9',
    },
    secondary: {
      main: '#c3bebb',
    },
    text: {
      primary: '#000000',
      secondary: '#605c5c',
      disabled: '#e0e0e0',
      hint: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
});

export default theme;
