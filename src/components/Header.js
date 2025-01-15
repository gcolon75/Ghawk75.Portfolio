import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            {/* Left-Aligned Logo */}
            <div className="logo">Ghawk75</div>

            {/* Centered Navigation */}
            <nav className="nav-links">
                <a href="#hero">Home</a>
                <a href="#projects">Projects</a>
                <a href="#skill-tree">Skill Tree</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;