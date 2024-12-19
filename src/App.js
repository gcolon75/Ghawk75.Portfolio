import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Particles from 'react-tsparticles';

function App() {
  console.log("App component rendering...");

  return (
    <div>
      <Particles
  options={{
    background: {
      color: "#0b0c10",
    },
    particles: {
      color: { value: "#66fcf1" },
      links: { color: "#66fcf1", distance: 150, enable: true },
      move: { enable: true, speed: 3 },
      size: { value: 3 },
    },
    fullScreen: {
      zIndex: -1, // Push the particles behind other content
    },
  }}
/>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;