import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import SkillTree from './components/SkillTree';
import ContactFooter from './components/ContactFooter';

import Project1Page from './components/Project1Page';
import Project2Page from './components/Project2Page';
import Project3Page from './components/Project3Page';
import Project4Page from './components/Project4Page';

import './App.css';
import backgroundImage from './assets/background4.png';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}
      >
        <Routes>
          {/* Full Homepage Layout */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <section className="centered-section"><Projects /></section>
                <section className="centered-section"><About /></section>
                <section className="centered-section"><SkillTree /></section>
                <section className="centered-section"><ContactFooter /></section>
              </>
            }
          />

          {/* Individual Project Pages */}
          <Route path="/projects/axle" element={<Project1Page />} />
          <Route path="/projects/goalee" element={<Project2Page />} />
          <Route path="/projects/volleyball" element={<Project4Page />} />
          <Route path="/projects/tritongoplus" element={<Project3Page />} />

          {/* Fallback Route */}
          <Route path="*" element={<h1 style={{ color: 'white', textAlign: 'center', padding: '4rem' }}>404 – Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
