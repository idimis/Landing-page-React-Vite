import { FC } from "react";
import './styles.css';

const Slideout: FC = () => {
  return (
    <div className="slide-out">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/work">Work</a></li>
        <li><a href="/contact-us">Contact</a></li>
        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://webflow.com" target="_blank" rel="noopener noreferrer">Webflow</a></li>
      </ul>
    </div>
  );
};

export default Slideout;
