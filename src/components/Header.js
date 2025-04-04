import React from 'react';
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/'); // Go back to main page
    } else {
      scrollToSection('hero'); // Scroll to top on homepage
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <button 
          onClick={handleHomeClick}
          className="header-button"
          aria-label="Go to top of the page"
        >
          Ghawk75
        </button>
      </div>

      <nav className="nav-links">
        <button onClick={handleHomeClick} className="header-button">Home</button>
        <button onClick={() => scrollToSection('projects')} className="header-button">Projects</button>
        <button onClick={() => scrollToSection('contact')} className="header-button">Contact</button>
      </nav>
    </header>
  );
}

export default Header;