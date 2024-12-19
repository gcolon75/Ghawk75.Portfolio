import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import Particles from 'react-tsparticles';

function App() {
  return (
    <div>
      <Particles
        options={{
          background: {
            color: "#0b0c10",
          },
          particles: {
            color: {
              value: "#66fcf1",
            },
            links: {
              color: "#66fcf1",
              distance: 150,
              enable: true,
            },
            move: {
              enable: true,
              speed: 3,
            },
            size: {
              value: 3,
            },
          },
        }}
      />
      {/* Include your components here */}
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;