import { createRoot } from 'react-dom/client';
import App from './app';
import * as serviceWorker from './serviceWorker';
import './i18n';
import { CssBaseline } from '@mui/material';
import { ThemeProviderWithToggle } from './components/themeContext';

const root = createRoot(document.getElementById('root'));

root.render(
    <ThemeProviderWithToggle>
        <CssBaseline />
        <App />
    </ThemeProviderWithToggle>
);

serviceWorker.unregister();