import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Ghawk75</a>
            </div>
            <nav className="nav-links">
                <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a>
                <a href="#projects">Projects</a>
                <a href="#skilltree">Skill Tree</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;