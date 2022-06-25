import { useState, createContext } from 'react';

const ThemeContext = createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark');

    var toggleThemem = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const value = {
        theme,
        toggleThemem
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}