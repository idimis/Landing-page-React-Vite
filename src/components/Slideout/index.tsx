import { FC } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './styles.css';

interface SlideoutProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const Slideout: FC<SlideoutProps> = ({ isOpen, closeMenu }) => {
  return (
    <>
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      <div className={`slide-out ${isOpen ? 'open' : ''}`}>
        <ul className="main-menu">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li> {/* Use Link for navigation */}
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/work" onClick={closeMenu}>Work</Link></li>
          <li><Link to="/contact-us" onClick={closeMenu}>Contact</Link></li> {/* Update this to Link */}
        </ul>
        <div className="social-menu">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </>
  );
};

export default Slideout;
