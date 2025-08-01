import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// Team member data with Pexels image URLs
const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Head of Research',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
  }
];

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
        
        <div className="team-section">
          <h3>Meet Our Leadership</h3>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="team-member-image">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    loading="lazy"
                  />
                </div>
                <h4>{member.name}</h4>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
