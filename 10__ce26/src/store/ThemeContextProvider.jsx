// TODO: Create & manage context in this file
// TODO: Add the component code (incl. dynamic context value)

import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => _,
});

export default function ThemeContextProvider({ children }) {
  const [toggledTheme, setToggledTheme] = useState('light');
  const handleToogleTheme = () =>
    setToggledTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  const ctxValue = { theme: toggledTheme, toggleTheme: handleToogleTheme };
  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
