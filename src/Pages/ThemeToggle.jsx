// src/components/ThemeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Ensure the path is correct

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};

export default ThemeToggle;
