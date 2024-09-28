// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">Soil Farming</div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/admin">Admin Dashboard</Link>
            <Link to="/user">User Dashboard</Link>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
