import React, { createContext, useState } from 'react';
import { lightTheme, darkTheme } from '../constants/theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default is false, so Light Mode is the main UI
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dynamically select the theme object based on state
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};