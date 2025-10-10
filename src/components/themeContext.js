import { createContext, useContext, useState } from 'react';
import { zeroSevenLightTheme, zeroSevenDarkTheme } from '../theme/zeroSevenTheme';
import { ThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const ThemeProviderWithToggle = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const theme = mode === 'light' ? zeroSevenLightTheme : zeroSevenDarkTheme;

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeToggle = () => useContext(ThemeContext);