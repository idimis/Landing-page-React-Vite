import { FC, useState } from "react";
import Slideout from "../Slideout"; // Import the SlideOutMenu component
import './styles.css';

const Overlay: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="overlay-menu" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
      <span>👋</span>
      <span>Hi I’m Adimas</span>
      {isMenuOpen && <Slideout />} {/* Show the slide-out menu when hovering */}
    </div>
  );
};

export default Overlay;
