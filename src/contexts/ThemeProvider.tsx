import { useState, useEffect, ReactNode, } from "react";
import { ThemeContext } from "./ContextManager";
import { THEME } from '../utilities/dark-mode-toggler';

interface ThemeProviderProps {
    children?: ReactNode
}
export function ThemeProvider({ children }: ThemeProviderProps) {
    //for theme switching
    const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
    const getDefaultTheme = (): string => {
        const localStorageTheme = localStorage.getItem('default-theme');
        const browserDefault = isBrowserDefaultDark() ? THEME.LIGHT : THEME.DARK;
        return localStorageTheme || browserDefault;
    };

    const [theme, setTheme] = useState(getDefaultTheme());

    useEffect(() => {
        //switch theme here from light to dark, vice-versa
        if (theme === 'light') document.body.classList.remove('dark')
        else document.body.classList.add('dark');
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        
        const newTheme = (theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    } 
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}