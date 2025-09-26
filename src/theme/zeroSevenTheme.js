import { createTheme } from '@mui/material/styles';

const zeroSevenTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFA500',
    },
    secondary: {
      main: '#5D3FD3',
    },
    background: {
      default: '#121212',
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

export default zeroSevenTheme;