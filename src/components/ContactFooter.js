import React from 'react';
import './ContactFooter.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="contact-footer">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>Email: <a href="mailto:ghawk075@gmail.com">ghawk075@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p>Phone: <a href="tel:8477781274">847-778-1274</a></p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p>Location: California</p>
        </div>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/gabriel-colon-3b4487253/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/gcolon75" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://gcolon75.github.io/Ghawk75.Portfolio/" target="_blank" rel="noopener noreferrer">
          <FaGlobe className="social-icon" title="Portfolio" />
        </a>
      </div>

      {/* Working Back to Top Button */}
      <div className="footer-details">
        <p>&copy; 2024 Ghawk75. All Rights Reserved.</p>
        <button className="back-to-top" onClick={scrollToTop}>Back to Top</button>
      </div>
    </footer>
  );
}

export default ContactFooter;