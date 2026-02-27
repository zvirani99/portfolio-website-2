import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

type ThemeName = 'default' | 'ocean';

function App() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeName | null;
    return storedTheme === 'ocean' ? 'ocean' : 'default';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);


  const themes = ['default', 'earth'];

const toggleTheme = () => {
  setTheme((previousTheme) => {
    const currentIndex = themes.indexOf(previousTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    return themes[nextIndex];
  });
};

  return (
    <div className="min-h-screen theme-bg px-16 md:px-20 lg:px-24 xl:px-32 2xl:px-40">
      <Hero onToggleTheme={toggleTheme} theme={theme} />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
