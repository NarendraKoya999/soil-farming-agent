import React from 'react';
import '../../styles/Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Soil Farming. All rights reserved.</p>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
