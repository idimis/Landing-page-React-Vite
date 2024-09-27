import React from 'react';
import './styles.css';
import heroImg from '../../assets/hero-img.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-text">Have something in mind?</p>
        <div className="second-row">
          <div className="hero-img-container">
            <img src={heroImg} alt="Hero" className="hero-img" />
          </div>
          <p className="footer-text">Let's build it together.</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="contact-box">
          <p className="contact-text">Get in touch</p>
        </div>
        <div className="social-media">
          <a href="#" className="social-icon">LinkedIn</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">Webflow</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
