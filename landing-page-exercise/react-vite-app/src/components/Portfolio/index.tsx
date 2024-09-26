import React from 'react';
import './styles.css';

const Portfolio = () => {
  const works = [
    { title: "Decodeable.co", description: "Brand Design - Webflow Development - Web Design" },
    { title: "Gofirefly.io", description: "Brand Design - Webflow Development - Web Design" },
    { title: "Blinkops.com", description: "Brand Design - Webflow Development - Web Design" },
    { title: "Withkanvas.com", description: "Brand Design - Webflow Development - Web Design" },
  ];

  return (
    <div className="portfolio">
      <h2>Recent Work</h2>
      <div className="work-list">
        {works.map((work, index) => (
          <div className="work-item" key={index}>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <button className="round-button">➡️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
