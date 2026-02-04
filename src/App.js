// App.js - Complete Professional Implementation
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { 
  FiMenu, 
  FiX, 
  FiChevronRight,
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiCheckCircle,
  FiAlertTriangle,
  FiShield,
  FiDroplet,
  FiScale,
  FiDollarSign,
  FiTruck,
  FiTool,
  FiHome,
  FiUsers,
  FiAlertCircle,
  FiPhoneCall,
  FiMessageSquare,
  FiNavigation,
  FiTarget,
  FiStar,
  FiAward,
  FiEye,
  FiThumbsUp,
  FiXCircle,
  FiSun,
  FiWind,
  FiZap,
  FiUserCheck
} from "react-icons/fi";
import { 
  FaWhatsapp, 
  FaFire, 
  FaWeight, 
  FaCertificate,
  FaGasPump,
  FaExchangeAlt,
  FaSearch,
  FaRegCalendarCheck,
  FaBalanceScale,
  FaShieldAlt,
  FaLeaf,
  FaIndustry,
  FaHandHoldingHeart,
  FaUserTie
} from "react-icons/fa";
import { GiGasMask, GiGasStove, GiWeightScale } from "react-icons/gi";
import { 
  MdLocalFireDepartment, 
  MdOutlinePrecisionManufacturing,
  MdSafetyDivider,
  MdLocationOn,
  MdOutlineVerified,
  MdOutlineSupportAgent
} from "react-icons/md";
import { TbGasStation, TbCertificate, TbCurrencyNaira } from "react-icons/tb";
import { IoIosSpeedometer, IoIosFlame } from "react-icons/io";
import { BsFillShieldLockFill, BsClipboardCheck } from "react-icons/bs";
import './App.css';

// Header Component
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    
    const handleClickOutside = (event) => {
      if (menuOpen && 
          !mobileMenuRef.current?.contains(event.target) && 
          !menuBtnRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { path: "/", label: "Home", icon: <FiHome /> },
    { path: "/about", label: "About", icon: <FiUsers /> },
    { path: "/safety", label: "Safety", icon: <FiShield /> },
    { path: "/contact", label: "Contact", icon: <FiPhone /> },
  ];

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <div className="logo">
          <IoIosFlame className="logo-icon" /> HOMANOL
        </div>
        
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        
        <button 
          ref={menuBtnRef}
          className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div 
          className={`mobile-nav-overlay ${menuOpen ? "active" : ""}`}
          onClick={closeMenu}
        ></div>
        
        <nav 
          ref={mobileMenuRef}
          className={`mobile-nav ${menuOpen ? "active" : ""}`}
        >
          <div className="mobile-nav__header">
            <div className="logo">
              <IoIosFlame className="logo-icon" /> HOMANOL
            </div>
          </div>
          <ul className="mobile-nav__links">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink 
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  <FiChevronRight className="nav-chevron" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3><IoIosFlame /> HOMANOL Gas Plant</h3>
            <p>Providing accurate, safe, and reliable cooking gas solutions since 2015. Your trusted partner for quality LPG services.</p>
            <p><strong><FiClock /> Open:</strong> Mon-Sat 7:00 AM - 8:00 PM<br/>
               <strong>Sundays:</strong> 9:00 AM - 4:00 PM</p>
            <div className="footer-certifications">
              <div className="cert-badge">
                <MdOutlineVerified /> ISO Certified
              </div>
              <div className="cert-badge">
                <FaShieldAlt /> Safety Compliant
              </div>
            </div>
          </div>
          
          <div className="footer__section">
            <h3>Quick Links</h3>
            <ul className="footer__links">
              <li><NavLink to="/"><FiHome /> Home</NavLink></li>
              <li><NavLink to="/about"><FiUsers /> About Us</NavLink></li>
              <li><NavLink to="/safety"><FiShield /> Safety Tips</NavLink></li>
              <li><NavLink to="/contact"><FiPhone /> Contact</NavLink></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h3>Contact Info</h3>
            <ul className="footer__contact">
              <li>
                <FiMapPin />
                <span>98 Port Harcourt Road, Aba, Abia State</span>
              </li>
              <li>
                <FiMail />
                <span>info@homanolgas.com</span>
              </li>
              <li>
                <FiPhone />
                <span>+234 803 123 4567</span>
              </li>
              <li>
                <FiAlertCircle />
                <span>Emergency: +234 803 999 4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; {currentYear} HOMANOL Gas Plant. All rights reserved. | Safety First, Always.</p>
          <p className="footer-transparency">
            <FiEye /> Transparent Operations • <FaBalanceScale /> Fair Pricing • <FaShieldAlt /> Safety Certified
          </p>
        </div>
      </div>
    </footer>
  );
}

// Mobile CTA Component
function MobileCTA() {
  return (
    <div className="mobile-cta">
      <a href="tel:+2348031234567" className="cta-button cta-call" aria-label="Call us">
        <FiPhoneCall />
        <div className="cta-button__text">
          <span>Call Now</span>
        </div>
      </a>
      <a 
        href="https://wa.me/2348031234567" 
        className="cta-button cta-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <div className="cta-button__text">
          <span>WhatsApp</span>
        </div>
      </a>
    </div>
  );
}


// Home Page Component - FIXED VERSION
function Home() {
  const navigate = useNavigate();
  const [visibleElements, setVisibleElements] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current = observer;
    
    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(section => observer.observe(section));
    }, 100);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero__content">
          <h1 className="animate-on-load">
            Accurate Gas. Honest Weight.
          </h1>
          <p className="lead animate-on-load delay-1">
            Premium LPG solutions with digital precision. Your trusted partner 
            for safe, transparent, and reliable cooking gas services in Aba.
          </p>
          <div className="hero__actions animate-on-load delay-2">
            <button
              className="btn btn--primary"
              onClick={() => navigate("/contact")}
            >
              <FiNavigation /> Get Directions
            </button>
            <button
              className="btn btn--secondary"
              onClick={() => navigate("/about#pricing")}
            >
              <TbCurrencyNaira /> View Pricing
            </button>
          </div>
          
          <div className="hero__trust-badges">
            <div className="trust-badge">
              <FaCertificate className="badge-icon" />
              <span className="badge-text">Certified Quality</span>
            </div>
            <div className="trust-badge">
              <GiWeightScale className="badge-icon" />
              <span className="badge-text">Digital Weighing</span>
            </div>
            <div className="trust-badge">
              <BsFillShieldLockFill className="badge-icon" />
              <span className="badge-text">Safety First</span>
            </div>
            <div className="trust-badge">
              <FiEye className="badge-icon" />
              <span className="badge-text">Transparency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why section">
        <div className="container text-center">
          <h2 className={`animate-on-scroll ${visibleElements['why-heading'] ? 'visible' : ''}`} data-section="why-heading">
            Why Choose Homanol
          </h2>
          <p className={`lead animate-on-scroll ${visibleElements['why-subtitle'] ? 'visible' : ''}`} data-section="why-subtitle">
            Building trust through transparency and excellence
          </p>

          <div className="why__grid">
            <div
              className={`why__item animate-on-scroll ${visibleElements['why-1'] ? 'visible' : ''}`}
              data-section="why-1"
            >
              <GiWeightScale className="item-icon" />
              <h3>Digital Precision</h3>
              <p>Electronic scales for exact measurement accuracy</p>
            </div>
            <div
              className={`why__item animate-on-scroll ${visibleElements['why-2'] ? 'visible' : ''}`}
              data-section="why-2"
            >
              <FaGasPump className="item-icon" />
              <h3>Quality Assured</h3>
              <p>Certified LPG from trusted national suppliers</p>
            </div>
            <div
              className={`why__item animate-on-scroll ${visibleElements['why-3'] ? 'visible' : ''}`}
              data-section="why-3"
            >
              <TbCurrencyNaira className="item-icon" />
              <h3>Fair Pricing</h3>
              <p>No hidden charges, complete transparency</p>
            </div>
            <div
              className={`why__item animate-on-scroll ${visibleElements['why-4'] ? 'visible' : ''}`}
              data-section="why-4"
            >
              <FaShieldAlt className="item-icon" />
              <h3>Safety Certified</h3>
              <p>Professional staff and proper handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section--light">
        <div className="container">
          <div className={`price__card animate-on-scroll ${visibleElements['services'] ? 'visible' : ''}`} data-section="services">
            <h2><TbGasStation /> Our Services</h2>
            <p className="lead">Comprehensive LPG solutions for homes and businesses</p>

            <div className="services-list">
              <div className="service-item">
                <h3><TbGasStation /> LPG Refilling</h3>
                <p>All cylinder sizes with digital precision weighing</p>
                <ul className="service-features">
                  <li><FiCheckCircle /> 3kg, 5kg, 6kg, 12.5kg, 25kg, 50kg cylinders</li>
                  <li><FiCheckCircle /> Digital scale measurement</li>
                  <li><FiCheckCircle /> Purity certification</li>
                </ul>
              </div>
              <div className="service-item">
                <h3><FaExchangeAlt /> Cylinder Exchange</h3>
                <p>Safe exchange program with professional inspection</p>
                <ul className="service-features">
                  <li><FiCheckCircle /> Valve safety check</li>
                  <li><FiCheckCircle /> Leak detection test</li>
                  <li><FiCheckCircle /> Date verification</li>
                </ul>
              </div>
              <div className="service-item">
                <h3><FiTruck /> Home Delivery</h3>
                <p>Prompt delivery within Aba and surrounding areas</p>
                <ul className="service-features">
                  <li><FiCheckCircle /> Same-day delivery</li>
                  <li><FiCheckCircle /> Trained delivery personnel</li>
                  <li><FiCheckCircle /> Safety installation guidance</li>
                </ul>
              </div>
              <div className="service-item">
                <h3><FaSearch /> Safety Inspection</h3>
                <p>Free professional inspection of your gas setup</p>
                <ul className="service-features">
                  <li><FiCheckCircle /> Leak detection</li>
                  <li><FiCheckCircle /> Regulator check</li>
                  <li><FiCheckCircle /> Ventilation assessment</li>
                </ul>
              </div>
            </div>

            <div className={`transparency-badge animate-on-scroll ${visibleElements['transparency'] ? 'visible' : ''}`} data-section="transparency">
              <FiEye /> 100% Transparent <FaBalanceScale /> Fair Pricing <FaShieldAlt /> Safety First
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="map section">
        <div className="container text-center">
          <h2 className="animate-on-scroll" data-section="visit-heading">
            Visit Our Plant
          </h2>
          <p className="lead animate-on-scroll" data-section="visit-subtitle">
            Experience our professional service firsthand
          </p>
          
          <div className="map__embed animate-on-scroll" data-section="map">
            <div className="map-placeholder">
              <MdLocationOn className="map-icon" />
              <h3>HOMANOL Gas Plant</h3>
              <p>98 Port Harcourt Road, Aba, Abia State</p>
              <p><FiClock /> Open: Mon-Sat 7AM-8PM | Sun 9AM-4PM</p>
              <div className="direction-buttons">
                <button 
                  className="btn btn--primary"
                  onClick={() => navigate("/contact")}
                >
                  <FiNavigation /> Get Directions
                </button>
                <button 
                  className="btn btn--outline"
                  onClick={() => window.open('https://maps.google.com/?q=98+Port+Harcourt+Road+Aba', '_blank')}
                >
                  <FiMapPin /> Open in Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// About Page Component
function About() {
  const [visible, setVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page">
      <div className="container">
        <h1 ref={aboutRef} className={visible ? 'visible' : ''}>
         About Homanol
        </h1>
        
        <div className="page__content">
          {/* Hero Section */}
          <section className="about-hero animate-on-scroll">
            <div className="about-hero__content">
              <h2> Trusted Since 2015</h2>
              <p className="lead">
                Founded with a commitment to accuracy and transparency, HOMANOL has grown 
                from a small family business into Aba's most trusted gas plant.
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="page__section animate-on-scroll">
            <h2> Our Story</h2>
            <p>
              HOMANOL Gas Plant was established in 2015 with a simple mission: to provide 
              accurate, safe, and reliable cooking gas solutions to the Aba community. 
              What started as a modest operation has grown into a trusted institution 
              serving thousands of households and businesses.
            </p>
            <p>
              Our growth has been built on three pillars: <strong>Accuracy</strong>, 
              <strong> Transparency</strong>, and <strong>Safety</strong>. We believe 
              that trust is earned through consistent, honest service.
            </p>
          </section>

          {/* Our Values */}
          <section className="page__section animate-on-scroll">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <FiTarget className="value-icon" />
                <h3>Precision</h3>
                <p>Digital weighing ensures you get exactly what you pay for</p>
              </div>
              <div className="value-card">
                <FiEye className="value-icon" />
                <h3>Transparency</h3>
                <p>Clear pricing and open operations build trust</p>
              </div>
              <div className="value-card">
                <FiShield className="value-icon" />
                <h3>Safety</h3>
                <p>Professional handling and certified equipment</p>
              </div>
              <div className="value-card">
                <FiThumbsUp className="value-icon" />
                <h3>Integrity</h3>
                <p>Honest service that puts customers first</p>
              </div>
            </div>
          </section>

          {/* Pricing & Transparency */}
          <section className="page__section animate-on-scroll" id="pricing">
            <h2> Pricing & Transparency</h2>
            <p className="lead">
              Clear, fair pricing with no hidden charges. We believe in complete transparency.
            </p>
            
            <div className="pricing-card animate-on-scroll">
              <div className="pricing-header">
                <h3><GiWeightScale /> Today's Gas Prices</h3>
                <p>Updated daily | Market-competitive rates</p>
              </div>
              
              <div className="pricing-list">
                <div className="price-item">
                  <span><FaGasPump /> Gas per KG</span>
                  <span className="price">₦1,050</span>
                </div>
                <div className="price-item">
                  <span><TbGasStation /> 3kg Cylinder</span>
                  <span className="price">₦3,150</span>
                </div>
                <div className="price-item">
                  <span><TbGasStation /> 5kg Cylinder</span>
                  <span className="price">₦5,250</span>
                </div>
                <div className="price-item">
                  <span><TbGasStation /> 12.5kg Cylinder</span>
                  <span className="price">₦13,125</span>
                </div>
                <div className="price-item">
                  <span><TbGasStation /> 25kg Cylinder</span>
                  <span className="price">₦26,250</span>
                </div>
                <div className="price-item">
                  <span><TbGasStation /> 50kg Cylinder</span>
                  <span className="price">₦52,500</span>
                </div>
              </div>
              
              <div className="pricing-features">
                <div className="feature">
                  <FiCheckCircle /> Weighed in front of customers
                </div>
                <div className="feature">
                  <FiCheckCircle /> Digital receipt with breakdown
                </div>
                <div className="feature">
                  <FiCheckCircle /> No hidden charges
                </div>
                <div className="feature">
                  <FiCheckCircle /> Price match guarantee
                </div>
              </div>
              
              <p className="pricing-note">
                <FiAlertTriangle /> <strong>Note:</strong> Prices updated daily based on market rates. 
                All cylinders weighed digitally for accuracy.
              </p>
            </div>
          </section>

          {/* Our Team */}
          <section className="page__section animate-on-scroll">
            <h2>Our Team</h2>
            <p>
              Our team consists of certified professionals trained in gas handling, 
              safety procedures, and customer service. Regular training ensures we 
              maintain the highest standards of safety and professionalism.
            </p>
            <div className="team-features">
              <div className="team-feature">
                <MdOutlineSupportAgent />
                <h4>Certified Technicians</h4>
                <p>Professionally trained and certified</p>
              </div>
              <div className="team-feature">
                <BsClipboardCheck />
                <h4>Regular Training</h4>
                <p>Continuous safety and skills training</p>
              </div>
              <div className="team-feature">
                <FaHandHoldingHeart />
                <h4>Customer Focus</h4>
                <p>Dedicated to exceptional service</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

// Safety Page Component
function Safety() {
  useEffect(() => {
    const elements = document.querySelectorAll('.safety-item');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <main className="page">
      <div className="container">
        <h1 className="animate-on-load">
          Gas Safety Guidelines
        </h1>
        
        <div className="page__content">
          {/* Intro */}
          <section className="safety-intro animate-on-scroll">
            <div className="safety-hero">
              <FiShield className="safety-hero-icon" />
              <h2>Safety First, Always</h2>
              <p className="lead">
                LPG is safe when handled properly. Follow these essential guidelines 
                to ensure safe gas usage in your home or business.
              </p>
            </div>
          </section>

          {/* Safety Do's */}
          <section className="page__section safety-dos animate-on-scroll">
            <h2><FiCheckCircle /> Safety Do's</h2>
            <p className="section-subtitle">Essential practices for safe gas usage</p>
            
            <div className="safety-list">
              <div className="safety-item">
                <div className="safety-icon">
                  <FiCheckCircle />
                </div>
                <h3>Keep Upright</h3>
                <p>Always store cylinders in an upright position</p>
              </div>
              <div className="safety-item">
                <div className="safety-icon">
                  <FiCheckCircle />
                </div>
                <h3>Proper Ventilation</h3>
                <p>Store in well-ventilated areas away from heat sources</p>
              </div>
              <div className="safety-item">
                <div className="safety-icon">
                  <FiCheckCircle />
                </div>
                <h3>Regular Checks</h3>
                <p>Use soap solution to check for leaks regularly</p>
              </div>
              <div className="safety-item">
                <div className="safety-icon">
                  <FiCheckCircle />
                </div>
                <h3>Professional Equipment</h3>
                <p>Use approved regulators and certified hoses</p>
              </div>
              <div className="safety-item">
                <div className="safety-icon">
                  <FiCheckCircle />
                </div>
                <h3>Turn Off Properly</h3>
                <p>Turn off cylinder valve when not in use</p>
              </div>
              <div className="safety-item">
                <div className="safety-icon">
                  <FiCheckCircle />
                </div>
                <h3>Fire Safety</h3>
                <p>Keep fire extinguisher nearby and know how to use it</p>
              </div>
            </div>
          </section>

          {/* Safety Don'ts */}
          <section className="page__section safety-donts animate-on-scroll">
            <h2><FiXCircle /> Safety Don'ts</h2>
            <p className="section-subtitle">Practices to avoid for your safety</p>
            
            <div className="safety-list">
              <div className="safety-item">
                <div className="safety-icon danger">
                  <FiXCircle />
                </div>
                <h3>No Enclosed Spaces</h3>
                <p>Never store cylinders in enclosed cabinets or rooms</p>
              </div>
              <div className="safety-item">
                <div className="safety-icon danger">
                  <FiXCircle />
                </div>
                <h3>Avoid Damaged Equipment</h3>
                <p>Don't use cylinders with dents, rust, or damage</p>
              </div>
              <div className="safety-item">
                <div className="safety-icon danger">
                  <FiXCircle />
                </div>
                <h3>No Open Flames</h3>
                <p>Never use open flames to check for leaks</p>
              </div>
              <div className="safety-item">
                <div className="safety-icon danger">
                  <FiXCircle />
                </div>
                <h3>Protect from Sunlight</h3>
                <p>Don't expose cylinders to direct sunlight</p>
              </div>
              <div className="safety-item">
                <div className="safety-icon danger">
                  <FiXCircle />
                </div>
                <h3>No Self-Repairs</h3>
                <p>Never attempt to repair cylinders yourself</p>
              </div>
              <div className="safety-item">
                <div className="safety-icon danger">
                  <FiXCircle />
                </div>
                <h3>No Smoking</h3>
                <p>Never smoke near gas cylinders or equipment</p>
              </div>
            </div>
          </section>

          {/* Emergency Procedures */}
          <section className="page__section emergency animate-on-scroll">
            <div className="emergency-card">
              <FiAlertTriangle className="emergency-icon" />
              <h2>Emergency Procedures</h2>
              <p className="emergency-subtitle">If you suspect a gas leak, follow these steps immediately:</p>
              
              <ol className="emergency-steps">
                <li>
                  <strong>Turn Off</strong> the cylinder valve immediately
                </li>
                <li>
                  <strong>Extinguish</strong> all flames - no smoking, no electrical switches
                </li>
                <li>
                  <strong>Ventilate</strong> the area - open doors and windows
                </li>
                <li>
                  <strong>Evacuate</strong> the area if leak persists
                </li>
                <li>
                  <strong>Call Emergency:</strong> 
                  <a href="tel:+2348039994567" className="emergency-phone">
                    <FiPhone /> +234 803 999 4567
                  </a>
                </li>
                <li>
                  <strong>Do Not Use</strong> the gas until inspected by professionals
                </li>
              </ol>
              
              <div className="emergency-contact">
                <div className="contact-item">
                  <FiPhone />
                  <div>
                    <h4>Emergency Hotline</h4>
                    <a href="tel:+2348039994567">+234 803 999 4567</a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaWhatsapp />
                  <div>
                    <h4>WhatsApp Emergency</h4>
                    <a href="https://wa.me/2348039994567">+234 803 999 4567</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Free Safety Inspection */}
          <section className="page__section safety-offer animate-on-scroll">
            <div className="safety-card">
              <div className="safety-card__header">
                <FaSearch className="safety-card-icon" />
                <h2>Free Safety Inspection</h2>
              </div>
              <p className="safety-card-text">
                We offer complimentary safety inspections of your gas setup. 
                Our certified technicians will check for leaks, proper installation, 
                and safety compliance.
              </p>
              <div className="safety-features">
                <div className="feature">
                  <FiCheckCircle /> Leak detection test
                </div>
                <div className="feature">
                  <FiCheckCircle /> Regulator safety check
                </div>
                <div className="feature">
                  <FiCheckCircle /> Hose condition assessment
                </div>
                <div className="feature">
                  <FiCheckCircle /> Ventilation evaluation
                </div>
              </div>
              <button 
                className="btn btn--primary btn--full"
                onClick={() => window.location.href = "tel:+2348031234567"}
              >
                <FaRegCalendarCheck /> Schedule Free Inspection
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

// Contact Page Component
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: 'refill'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you! Your message has been sent. We\'ll contact you within 24 hours.');
      setFormData({ name: '', phone: '', email: '', message: '', service: 'refill' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="page">
      <div className="container">
        <h1 className="animate-on-load">
          Contact & Location
        </h1>
        
        <div className="contact-content">
          {/* Contact Information */}
          <section className="contact-section animate-on-scroll">
            <div className="contact-hero">
              <FiMapPin className="contact-hero-icon" />
              <h2>Visit Our Plant</h2>
              <p className="lead">Experience our professional service in person</p>
            </div>
            
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div className="info-content">
                  <h3>Address</h3>
                  <p>98 Port Harcourt Road, Aba, Abia State</p>
                  <p className="info-note">
                    <FiMapPin /> Opposite Trinity Hospital, Near Ariaria Junction
                  </p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div className="info-content">
                  <h3>Contact Details</h3>
                  <div className="contact-details">
                    <p><strong>Phone:</strong> <a href="tel:+2348031234567">+234 803 123 4567</a></p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/2348031234567">+234 803 123 4567</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@homanolgas.com">info@homanolgas.com</a></p>
                    <p><strong>Emergency:</strong> <a href="tel:+2348039994567">+234 803 999 4567 (24/7)</a></p>
                  </div>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FiClock />
                </div>
                <div className="info-content">
                  <h3>Business Hours</h3>
                  <div className="business-hours">
                    <div className="hours-item">
                      <span className="days">Monday - Saturday</span>
                      <span className="time">7:00 AM - 8:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span className="days">Sundays & Holidays</span>
                      <span className="time">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="hours-item emergency">
                      <span className="days">Emergency Service</span>
                      <span className="time">Available 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-section animate-on-scroll">
            <div className="contact-form-card">
              <div className="form-header">
                <FiMessageSquare className="form-icon" />
                <h2>Quick Contact Form</h2>
                <p>Send us a message and we'll respond promptly</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <FiUserCheck /> Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FiPhone /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="0803 123 4567"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <FiMail /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">
                    <TbGasStation /> Service Needed
                  </label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="refill">Gas Refill</option>
                    <option value="delivery">Home Delivery</option>
                    <option value="cylinder">Cylinder Purchase</option>
                    <option value="exchange">Cylinder Exchange</option>
                    <option value="safety">Safety Inspection</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">
                    <FiMessageSquare /> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Your message or special instructions..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn--primary btn--full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiMessageSquare /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </section>

          {/* Map Section */}
          <section className="contact-section animate-on-scroll">
            <div className="map-card">
              <div className="map-header">
                <FiMapPin className="map-header-icon" />
                <h2>Location Map</h2>
                <p>Find us easily with these directions</p>
              </div>
              
              <div className="map__embed">
                <div className="map-placeholder">
                  <MdLocationOn className="map-icon" size={64} />
                  <h3>📍 HOMANOL Gas Plant</h3>
                  <p>98 Port Harcourt Road, Aba, Abia State</p>
                  <p>Coordinates: 5.1167° N, 7.3667° E</p>
                  
                  <div className="direction-info">
                    <h4>Directions:</h4>
                    <ul className="direction-list">
                      <li>From Ariaria Market: Head towards Port Harcourt Road for 2km</li>
                      <li>From Aba Main Park: Take Port Harcourt Road for 5km</li>
                      <li>Look for our red and white signboard</li>
                    </ul>
                  </div>
                  
                  <div className="direction-buttons">
                    <a 
                      href="https://maps.google.com/?q=98+Port+Harcourt+Road+Aba" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                    >
                      <FiNavigation /> Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="contact-section animate-on-scroll">
            <div className="quick-actions-card">
              <div className="actions-header">
                <FiZap className="actions-icon" />
                <h2>Quick Actions</h2>
                <p>Get in touch instantly</p>
              </div>
              
              <div className="action-buttons">
                <a href="tel:+2348031234567" className="action-btn call-btn">
                  <FiPhoneCall />
                  <span>Call Now</span>
                </a>
                <a 
                  href="https://wa.me/2348031234567" 
                  className="action-btn whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
                <a href="mailto:info@homanolgas.com" className="action-btn email-btn">
                  <FiMail />
                  <span>Email Us</span>
                </a>
                <button 
                  className="action-btn schedule-btn"
                  onClick={() => window.location.href = "tel:+2348031234567"}
                >
                  <FaRegCalendarCheck />
                  <span>Schedule Visit</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

// Main App Component
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MobileCTA />
      <Footer />
    </Router>
  );
}