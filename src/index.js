import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import zeroSevenTheme from './theme/zeroSevenTheme.js';
import { ThemeProvider } from '@mui/material/styles';

const root = createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider theme={zeroSevenTheme}>
        <App />
    </ThemeProvider>
);

serviceWorker.unregister();