import { createContext, useContext, useEffect, useState } from 'react';
import { zeroSevenLightTheme, zeroSevenDarkTheme } from '../theme/zeroSevenTheme';
import { ThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const ThemeProviderWithToggle = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode');
        if (savedMode) {
            setThemeMode(savedMode);
        }
    }, []);

    const toggleTheme = () => {
        const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newThemeMode);
        localStorage.setItem('themeMode', newThemeMode);
    };

    const theme = themeMode === 'light' ? zeroSevenLightTheme : zeroSevenDarkTheme;

    return (
        <ThemeContext.Provider value={{ mode: themeMode, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeToggle = () => useContext(ThemeContext);