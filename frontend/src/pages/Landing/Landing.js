import React from 'react';
import './Landing.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="hero-primary">Achieve greatness with our gear</h1>
          <p className="hero-description">Dive into a realm of sports elegance, where each piece of gear is a masterpiece</p>
          <a href="#" className="btn btn--full margin-right-sm"><Link to='/tag/All'>Explore</Link></a>
          <a href="#" className="btn btn--outline"><Link to='/aboutus'>Learn More</Link></a>
        </div>
        <div className="hero-image-box">
          <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg" alt="Girl designing UI for Website" className="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default Landing;
