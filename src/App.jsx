import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveNow from './components/LiveNow';
import Schedule from './components/Schedule';
import PopularVOD from './components/PopularVOD';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      if (next === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      return next;
    });
  }, []);

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <LiveNow />
      <Schedule />
      <PopularVOD />
      <Footer />
    </>
  );
}

export default App;
