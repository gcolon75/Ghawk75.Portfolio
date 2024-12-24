import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Flowchart from './components/Flowchart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import backgroundImage from './assets/background.png'; // Import background image

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100, // Trigger offset
      once: true, // Only animate once
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use imported background image
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
      <Flowchart />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;