import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import SkillTree from './components/SkillTree';
import ContactFooter from './components/ContactFooter';
import './App.css';
import backgroundImage from './assets/background4.png';

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
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
            <Header />
            <Hero />
            <section className="centered-section">
                <Projects />
            </section>
            <section className="centered-section">
                <About />
            </section>
            <section className="centered-section">
                <SkillTree />
            </section>
            <section className="centered-section">
                <ContactFooter />
            </section>
        </div>
    );
}

export default App;