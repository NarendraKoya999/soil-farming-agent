import React from 'react';
import '../../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Soil Farming Agent</h1>
          <p>Manage soil and crop details with ease using our modern, intuitive platform.</p>
          <a href="/register" className="cta-button">Get Started</a>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Soil Management</h3>
            <p>Monitor and manage soil health with detailed reports on soil nutrients, pH levels, and texture.</p>
          </div>
          <div className="feature-card">
            <h3>Crop Management</h3>
            <p>Track crop details, distributor information, and ensure optimized soil conditions for better yields.</p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Monitoring</h3>
            <p>Get real-time insights into soil conditions to make informed farming decisions.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Join us today and improve your farming efficiency!</h2>
        <a href="/register" className="cta-button">Sign Up Now</a>
      </section>
    </div>
  );
};

export default HomePage;
