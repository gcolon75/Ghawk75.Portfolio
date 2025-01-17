import React from 'react';
import './Header.css';

function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            {/* Left-Aligned Logo Button */}
            <div className="logo">
                <button 
                    onClick={() => scrollToSection('hero')}
                    className="header-button"
                    aria-label="Go to top of the page"
                >
                    Ghawk75
                </button>
            </div>

            {/* Centered Navigation Links */}
            <nav className="nav-links">
                <button onClick={() => scrollToSection('hero')} className="header-button">Home</button>
                <button onClick={() => scrollToSection('projects')} className="header-button">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="header-button">Contact</button>
            </nav>
        </header>
    );
}

export default Header;