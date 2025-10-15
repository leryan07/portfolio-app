import { createTheme } from '@mui/material/styles';

const zeroSevenLightTheme = createTheme({
  typography: {
    fontFamily: 'Orbitron, Arial, sans-serif',
  },
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
  custom: {
    gradients: {
      sectionIntro: 'linear-gradient(135deg, #FFA500 0%, #fff8eb 25%, #FFFFFF 50%, #f1effb 75%, #5D3FD3 100%)',
      sectionAboutMe: 'linear-gradient(45deg, #FFA500 0%, #fff8eb 25%, #FFFFFF 50%, #f1effb 75%, #5D3FD3 100%)',
      aboutMeList: 'linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(var(--angle), #FFA500, #5D3FD3) border-box'
    }
  }
});

const zeroSevenDarkTheme = createTheme({
  typography: {
    fontFamily: 'Orbitron, Arial, sans-serif',
  },
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
  custom: {
    gradients: {
      sectionIntro: 'linear-gradient(135deg, #FFA500 0%, #93856c 25%, #7d7d7d 50%, #837f93 75%, #5D3FD3 100%)',
      sectionAboutMe: 'linear-gradient(45deg, #FFA500 0%, #93856c 25%, #7d7d7d 50%, #837f93 75%, #5D3FD3 100%)',
      aboutMeList: 'linear-gradient(#7d7d7d, #7d7d7d) padding-box, linear-gradient(var(--angle), #FFA500, #5D3FD3) border-box'
    }
  }
});

export { zeroSevenLightTheme, zeroSevenDarkTheme };