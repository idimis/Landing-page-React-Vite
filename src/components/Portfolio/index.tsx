import React from 'react';
import './styles.css';

const Portfolio = () => {
  const works = [
    { company: "Decodeable.co", description: "Brand Design - Webflow Development - Web Design" },
    { company: "Gofirefly.io", description: "Brand Design - Webflow Development - Web Design" },
    { company: "Blinkops.com", description: "Brand Design - Webflow Development - Web Design" },
    { company: "Withkanvas.com", description: "Brand Design - Webflow Development - Web Design" },
  ];

  return (
    <div className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Recent Works</h2>
      </div>
      <div className="work-list">
        {works.map((work, index) => (
          <div className="portfolio-item" key={index}>
            <div className="portfolio-description">
              <h3 className="company-name">{work.company}</h3>
              <p className="work-description">{work.description}</p>
            </div>
            <button className="round-button">➡️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
