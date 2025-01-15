import React from 'react';
import './Header.css';

function Header() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="header">
            <div className="logo">
                {/* Clickable Logo with No Accessibility Error */}
                <button 
                    onClick={() => scrollToSection('top')}
                    className="header-button"
                >
                    Ghawk75
                </button>
            </div>
            <nav className="nav-links">
                {/* Using buttons for proper accessibility and smooth scrolling */}
                <button onClick={() => scrollToSection('projects')} className="header-button">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="header-button">Contact</button>
            </nav>
        </header>
    );
}

export default Header;