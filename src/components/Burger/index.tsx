import { FC, useState } from "react";
import Slideout from "../Slideout"; 
import './styles.css';

const Overlay: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div 
        className="overlay-menu" 
        onMouseEnter={toggleMenu} 
        onMouseLeave={toggleMenu} 
        onClick={toggleMenu} 
        role="button" 
        tabIndex={0} 
      >
        <span>👋</span>
        {isMenuOpen && <span> Hi I'm Adimas</span>} 
      </div>
      
     
      <Slideout isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </>
  );
};

export default Overlay;
