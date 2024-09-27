// landingpage index.tsx
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Overlay from '../../components/Overlay';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';
import About from '../../components/About';
import Workrow from '../../components/Workrow';
import Testimonials from '../../components/Testimonials';
import { Link } from 'react-router-dom'; 


import './styles.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Overlay />
      <About />
      <Portfolio />
      <Workrow />
      <Testimonials />
      <Link to="/contact-us"> {/* Add this link to navigate to Contact Us */}
        <button className="contact-button">Contact Us</button>
      </Link>
      <Footer />
    </div>
  );
};

export default LandingPage;
