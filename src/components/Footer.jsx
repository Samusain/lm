import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">        
        <div className="footer-bottom">
          <p>&copy; 2025 LedgyMedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;