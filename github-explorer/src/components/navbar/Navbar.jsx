// src/components/navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar glass-navbar">
      <div className="navbar-logo">GitHub Explorer</div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/bookmarks" onClick={closeMenu}>Bookmarks</Link>
        <Link to="/analytics" onClick={closeMenu}>Analytics</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "rotate1" : ""}`}></div>
        <div className={`bar ${isOpen ? "hide" : ""}`}></div>
        <div className={`bar ${isOpen ? "rotate2" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
