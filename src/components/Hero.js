import React from 'react';
import './Hero.css';

function Hero() {
    // Smooth scrolling functions
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero">
            {/* Left Side Content */}
            <div className="hero-circle">
                <div className="hero-text">
                    <h1 className="hero-title">Ghawk75 is Right Here!</h1>
                    <p className="hero-description">
                        Exploring creativity, design, and the infinite possibilities of the universe through code and storytelling.
                    </p>
                    <div className="hero-buttons">
                        {/* Updated Button Section with Two Actions */}
                        <button className="chat-button" onClick={scrollToContact}>CONNECT WITH ME</button>
                        <button className="chat-button explore-button" onClick={scrollToProjects}>EXPLORE MY PROJECTS</button>
                    </div>
                    <div className="hero-stats">
                        <div>
                            <h2>100%</h2>
                            <p>Dedication to Creativity</p>
                        </div>
                        <div>
                            <h2>∞</h2>
                            <p>Ideas Explored</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Image */}
            <div className="hero-image">
                <img src="/assets/hero-image.png" alt="Ghawk75 Avatar" />
            </div>
        </section>
    );
}

export default Hero;