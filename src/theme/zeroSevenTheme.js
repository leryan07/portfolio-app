import { createTheme } from '@mui/material/styles';

const zeroSevenLightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFA500',
    },
    secondary: {
      main: '#5D3FD3',
    },
    background: {
      default: '#FFFFFF',
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'default',
      },
    },
  },
});

const zeroSevenDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFA500',
    },
    secondary: {
      main: '#5D3FD3',
    },
    background: {
      default: '#7d7d7d',
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'default',
      },
    },
  },
});

export { zeroSevenLightTheme, zeroSevenDarkTheme };