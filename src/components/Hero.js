import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            {/* Left Side Content */}
            <div className="hero-text">
                <h1 className="hero-title">Ghawk75 is Right Here!</h1>
                <p className="hero-description">
                    Exploring creativity, design, and the infinite possibilities of the universe through code and storytelling.
                </p>
                <div className="hero-buttons">
                    <button className="chat-button">CONNECT WITH ME</button>
                    <a href="#projects" className="start-link">→ Explore Projects</a>
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

            {/* Right Side Image */}
            <div className="hero-image">
                <img src="/assets/hero-image.png" alt="Ghawk75 Avatar" />
            </div>
        </section>
    );
}

export default Hero;