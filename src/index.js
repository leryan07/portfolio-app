import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import { zeroSevenLightTheme, zeroSevenDarkTheme } from './theme/zeroSevenTheme.js';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const root = createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider theme={zeroSevenLightTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
);

serviceWorker.unregister();