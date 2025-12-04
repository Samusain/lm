import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* <div className="container"> */}
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <motion.div 
              className="logo-text"
              whileHover={{ scale: 1.05 }}
            >
              LEDGY <br /><span>MEDIA</span>
            </motion.div>
          </Link>

          <Link to="/contact" className="header-actions">
            <Link to="/contact" className="contact-btn">
              Contact Us <MdArrowOutward />
            </Link>
          </Link>

        </div>
      {/* </div> */}
    </motion.header>
  );
};

export default Header;