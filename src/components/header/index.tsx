import { FC } from "react";
import './styles.css';

const Index: FC = () => {
  return (
    <header className="nav-container">
      <nav>
        <div>
          @Adimas Barnwal
        </div>
        <div className="nav-list">
          <a href="/public">About</a>
          <a href="#work">Work</a>
          <a href="/contact-us">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Index;