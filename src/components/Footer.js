import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Your Name. All Rights Reserved.</p>
      <div className="footer-icons">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </div>
      <a href="#hero" className="back-to-top">
        Back to Top
      </a>
    </footer>
  );
}

export default Footer;