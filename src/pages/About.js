import React from 'react';
import { motion } from 'framer-motion';
import './About.css';


const About = () => {
  return (
    <motion.section 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="about-container">
        <div className="about-content">
          <div className="section-header">
            <h2>About Quantum Analytics</h2>
            <p className="section-subtitle">Pioneering the future of financial analytics</p>
          </div>
          
          <div className="about-mission">
            <p className="about-description">
              Quantum Analytics is a leading financial technology company specializing in AI-driven investment solutions. 
              Our mission is to democratize access to institutional-grade investment tools and insights.
            </p>
            <p className="about-description">
              Founded in 2020 by a team of Wall Street veterans and AI researchers, we combine deep financial expertise 
              with cutting-edge technology to deliver superior investment performance.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>50+</h3>
                <p>Global Clients</p>
              </div>
              <div className="stat-item">
                <h3>$1B+</h3>
                <p>Assets Under Management</p>
              </div>
              <div className="stat-item">
                <h3>99.9%</h3>
                <p>System Uptime</p>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </motion.section>
  );
};

export default About;
