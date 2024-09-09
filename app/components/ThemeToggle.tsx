'use client';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // Define o estado inicial do tema
  const [theme, setTheme] = useState<'light' | 'dark'>(
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
      ? 'dark'
      : 'light'
  );

  // Efeito para adicionar ou remover a classe de tema e atualizar o localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-300 dark:bg-gray-700 rounded"
      aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
