import React from 'react';
import FAQ from '../components/FAQ.jsx';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
import { FiPlay, FiArrowRight, FiVideo, FiMic, FiShoppingBag } from 'react-icons/fi';
import Viddy from '../images/eveningcity.mp4';
import LightRays from '../hooks/LightRays';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background">
          <video 
            autoPlay 
            muted
            loop 
            playsInline
            className="hero-video"
          >
            <source src={Viddy} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Elevate brands.
              <span className="gradient-text"> Elevate digital presence.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-subtitle"
            >
              We make brands and businesses extraordinary.
            </motion.p>
            
          </div>
        </div>
      </section>

      {/* Marketing Consult */}
      <section className="consult">
        <div className="container"> 
          <span className='touch'>AGENCY & CONSULTING</span>
          <article className='dialogue'>
            <h2 className="section-title">Marketing built on proof, not promises.</h2>
            <p>People expect more from brands than ever before. At the same time, achieving large-scale success has never been harder. Brands need to go beyond the ordinary. We use the tools of today to create top-notch growth solutions, helping companies reach the top.</p>
          </article>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <span className='touch'>TRUSTED BY</span>
          <article className="partner-article">
            <h2 className='section-title'>A selection of our projects and partners</h2>
            <p>With Lechner Media GmbH, we scale other brands. With our parent company Lechner Ventures GmbH, we co-found or invest in companies in order to play a leading role in their development.</p>
          </article>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What we do</h2>
            <p className="section-subtitle">
              Comprehensive creative solutions for your brand
            </p>
          </div>
          
          <div className="services-grid">
            <motion.div 
              className="service-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">
                <FiMic />
              </div>
              <h3>Web Design and Development</h3>
              <p>Creating stunning, user-centric website designs that captivate your audience and reflect your brand identity. We focus on intuitive layouts, modern aesthetics, and seamless user experiences.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="service-icon">
                <FiVideo />
              </div>
              <h3>Paid Advertising</h3>
              <p>Maximize your ROI with strategic paid campaigns across major platforms. We create and optimize ads that convert and drive targeted traffic to your business.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="service-icon">
                <FiShoppingBag />
              </div>
              <h3>Digital Marketing</h3>
              <p>Drive measurable results by leveraging various online channels to increase your brand visibility, engagement, and conversions across multiple platforms.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <span className='touch'>OUR PRINCIPLES</span>
          <article className="partner-article">
            <h2 className='section-title'>WHY US?</h2>
            <p>With Lechner Media GmbH, we scale other brands. With our parent company Lechner Ventures GmbH, we co-found or invest in companies in order to play a leading role in their development.</p>
          </article>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background:<LightRays
                raysOrigin="top-center"
                raysColor="#cfbdac"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={3.2}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="custom-rays"
              />
      }}
          >
            <p>Ready?</p>
            <h2>Let's create something extraordinary</h2>
            <div className="cta-actions">
              <Link to="/contact" className="action-btn">
                <FiArrowRight className="arrow-right" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;