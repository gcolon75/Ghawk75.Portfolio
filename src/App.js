import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Journey from './components/Journey'; 
import About from './components/About';
import ContactFooter from './components/ContactFooter';
import SkillTree from './components/SkillTree';
import Planet from './components/Planet';
import './App.css';
import backgroundImage from './assets/Background2.png';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        overflow: 'auto',
      }}
    >
      <Header />
      <Hero />
      <Projects />
      <About />
      <Journey />
      <ContactFooter />
    </div>
  );
}

export default App;