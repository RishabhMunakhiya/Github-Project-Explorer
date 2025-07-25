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
            <strong style={{ textDecoration: 'underline' }}>Trending Repositories:</strong> Browse top starred GitHub repos in real-time.
            <img className="filter-img" src="/trending.png" alt="" />
          </li>
          <li>
             <strong style={{ textDecoration: 'underline' }}>Smart Filters:</strong> Filter by programming languages, stars, and keywords.
             <img className="filter-img" src="/filter.png" alt="" />
          </li>
          <li>
             <strong style={{ textDecoration: 'underline' }}>Repo Analytics:</strong> View visual stats of stars, forks, issues, and languages using Chart.js.
             <img className="filter-img" src="/chart.png" alt="" />
          </li>
          <li>
             <strong style={{ textDecoration: 'underline' }}>Bookmark & Notes:</strong> Save your favorite repos and jot down thoughts for each.
            <img className="filter-img" src="/bookmark.png" alt="" />
          </li>
          <li>
             <strong style={{ textDecoration: 'underline' }}>Open Source Focus:</strong> Built with React, GitHub API, and open-source tools.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
