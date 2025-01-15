import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutSkillTree from './components/AboutSkillTree';
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
            {/* ✅ HERO Section */}
            <Hero />

            {/* ✅ Projects Section */}
            <section className="centered-section">
                <Projects />
            </section>

            {/* ✅ About & Skill Tree Section - NOW BELOW PROJECTS */}
            <section className="centered-section">
                <AboutSkillTree />
            </section>

            {/* ✅ Contact Footer Section */}
            <ContactFooter />
        </div>
    );
}

export default App;