import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-circle">
                <h1 className="hero-title">Ghawk75</h1>
                <p className="hero-text">
                    Exploring creativity, design, and the infinite possibilities of the universe through Design.
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="chat-button">Contact Me</a>
                    <a href="#projects" className="explore-button">Explore my Projects</a>
                </div>
                <div className="hero-stats">
                    <div>
                        <h2>100%</h2>
                        <p>Committed to Problem Solving</p>
                    </div>
                    <div>
                        <h2>∞</h2>
                        <p>Problems to Solve</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;