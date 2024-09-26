import React from 'react';
import './styles.css';
import AyushPhoto from '../../assets/Ayushphoto.svg';
import Rectangle from '../../assets/Rectangle25.svg';

const Hero = () => {
  return (
    <div className="hero">
      <img src={AyushPhoto} alt="Ayush" className="hero-image" />
      <div className="running-text">
        Mumet Developer - UI/UX Ora kober
      </div>
      <img src={Rectangle} alt="Rectangle" className="rectangle" />
    </div>
  );
};

export default Hero;
