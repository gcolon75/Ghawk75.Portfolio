import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;