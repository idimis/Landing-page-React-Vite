import { FC, useState } from "react";
import Slideout from "../Slideout"; // Pastikan path ini sesuai dengan struktur folder Anda
import './styles.css';

const BurgerButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="burger-icon">=</span> {/* Simbol burger */}
      </button>
      <Slideout isOpen={isOpen} closeMenu={toggleMenu} />
    </>
  );
};

export default BurgerButton;
