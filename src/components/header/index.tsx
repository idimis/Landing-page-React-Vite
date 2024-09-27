import { FC } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './styles.css';

const Index: FC = () => {
  return (
    <header className="nav-container">
      <nav>
        <div>
          @Adimas Barnwal
        </div>
        <div className="nav-list">
          <Link to="/about">About</Link> {/* Use Link for navigation */}
          <a href="#work">Work</a>
          <Link to="/contact-us">Contact</Link> {/* Update this to Link */}
        </div>
      </nav>
    </header>
  );
};

export default Index;
