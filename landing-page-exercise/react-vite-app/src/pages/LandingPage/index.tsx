import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';
import './styles.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default LandingPage;
