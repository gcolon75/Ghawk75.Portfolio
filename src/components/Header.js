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
      navigate('/#hero'); // Go back to home and scroll to top
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    }
  };

  const handleProjectsClick = () => {
    if (location.pathname !== '/') {
      navigate('/#projects');
    } else {
      scrollToSection('projects');
    }
  };

  const handleWritingClick = () => {
    if (location.pathname !== '/' && location.pathname !== '/#') {
      navigate('/#writing');
    } else {
      scrollToSection('writing');
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
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
  <button onClick={handleProjectsClick} className="header-button">Projects</button>
  <button onClick={handleWritingClick} className="header-button">Writing</button>
  <button onClick={handleContactClick} className="header-button">Contact</button>
</nav>
    </header>
  );
}

export default Header;