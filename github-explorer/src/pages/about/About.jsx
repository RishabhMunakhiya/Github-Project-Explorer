// src/pages/about/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-image">
          <img src="/G-modified.png" />
        </div>
        <h1>About GitHub Explorer</h1>
        <p>
          GitHub Explorer is an open-source project designed to help users
          discover trending repositories, filter by language, sort by stars,
          and visualize analytics using beautiful charts.
        </p>
        <p>
          This platform includes features like bookmarking, notes, and live
          GitHub API integration, all wrapped in a stunning glassmorphism UI.
        </p>
        <p>
          Created with ❤️ using React, Chart.js, GitHub REST API, and a
          modern, responsive design to ensure smooth usage across all devices.
        </p>
        <h3>Meet the Developer</h3>
        <p>
          👨‍💻 Built by Rishabh, a B.Tech Software Engineering student at DTU,
          passionate about open-source and solving real-world problems through
          code.
        </p>
      </div>
    </div>
  );
};

export default About;
