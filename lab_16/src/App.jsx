import React, { createContext, useContext, useState } from 'react';

// Theme Context for Lab Exercise
const ThemeContext = createContext();

// Theme Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Lab Exercise: Theme Switcher Component
function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div>
      <h2>Lab Exercise: Theme Switcher (useContext)</h2>
      <button 
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === 'light' ? 'white' : 'black',
          color: theme === 'light' ? 'black' : 'white',
          padding: '10px 20px',
          border: '1px solid gray',
          cursor: 'pointer'
        }}
      >
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

// Lab Task: Login/Logout Component
function AuthToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <div>
      <h2>Lab Task: Authentication Toggle (useState)</h2>
      <button 
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          border: '1px solid gray',
          cursor: 'pointer'
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}


export default function App() {
  return (
    <ThemeProvider>
      <div>
        {/* for lab Exercise */}
        <ThemeSwitcher />
        {/* for lab Task */}
        <AuthToggle />
      </div>
    </ThemeProvider>
  );
}