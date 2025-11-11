import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

  // Determine active section based on location and scroll position
  useEffect(() => {
    const determineActiveSection = () => {
      // If on a different page (project/writing detail), no section is active
      if (location.pathname !== '/') {
        setActiveSection('');
        return;
      }

      // Check hash in URL
      const hash = location.hash.replace('#', '');
      if (hash && ['projects', 'writing', 'contact'].includes(hash)) {
        setActiveSection(hash);
        return;
      }

      // Determine based on scroll position
      const sections = ['projects', 'writing', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      // Default to home if at the top
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    determineActiveSection();

    // Update on scroll
    const handleScroll = () => {
      determineActiveSection();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

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
  <button 
    onClick={handleHomeClick} 
    className={`header-button ${activeSection === 'home' ? 'active' : ''}`}
  >
    Home
  </button>
  <button 
    onClick={handleProjectsClick} 
    className={`header-button ${activeSection === 'projects' ? 'active' : ''}`}
  >
    Projects
  </button>
  <button 
    onClick={handleWritingClick} 
    className={`header-button ${activeSection === 'writing' ? 'active' : ''}`}
  >
    Writing
  </button>
  <button 
    onClick={handleContactClick} 
    className={`header-button ${activeSection === 'contact' ? 'active' : ''}`}
  >
    Contact
  </button>
</nav>
    </header>
  );
}

export default Header;