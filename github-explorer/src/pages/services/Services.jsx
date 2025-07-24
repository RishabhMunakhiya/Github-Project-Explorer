// src/pages/services/Services.jsx
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-card">
        <h1>Our Services</h1>
        <p>Explore what GitHub Explorer offers to developers and enthusiasts:</p>
        <ul className="services-list">
          <li>
            🔍 <strong>Trending Repositories:</strong> Browse top starred GitHub repos in real-time.
          </li>
          <li>
            🧠 <strong>Smart Filters:</strong> Filter by programming languages, stars, and keywords.
          </li>
          <li>
            📊 <strong>Repo Analytics:</strong> View visual stats of stars, forks, issues, and languages using Chart.js.
          </li>
          <li>
            ⭐ <strong>Bookmark & Notes:</strong> Save your favorite repos and jot down thoughts for each.
          </li>
          <li>
            💡 <strong>Open Source Focus:</strong> Built with React, GitHub API, and open-source tools.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
