import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faRobot, 
  faExchangeAlt, 
  faChartPie,
  faMicrochip,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: faChartLine,
      title: 'Financial Analytics',
      description: 'Advanced analytics to uncover market opportunities and optimize investment strategies.',
      delay: 0.1
    },
    {
      icon: faRobot,
      title: 'Automation Tools',
      description: 'Cutting-edge automation for efficient trading and portfolio management.',
      delay: 0.2
    },
    {
      icon: faExchangeAlt,
      title: 'Market Arbitrage',
      description: 'Exploit price differences across crypto and stock markets with our advanced detection systems.',
      delay: 0.3
    },
    {
      icon: faChartPie,
      title: 'Quantitative Analytics',
      description: 'Data-driven investment strategies powered by sophisticated quantitative models.',
      delay: 0.4
    },
    {
      icon: faMicrochip,
      title: 'HFT Solutions',
      description: 'Ultra-low latency trading infrastructure for high-frequency trading strategies.',
      delay: 0.5
    },
    {
      icon: faRocket,
      title: 'Advanced Algorithms',
      description: 'Proprietary trading algorithms designed for maximum efficiency and profitability.',
      delay: 0.6
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle">What We Offer</span>
          <h2>Our Core Features</h2>
          <p>Cutting-edge solutions for modern investors and traders</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: feature.delay
              }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 15px 30px rgba(108, 99, 255, 0.2)'
              }}
            >
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3>Ready to get started?</h3>
          <p>Join us today and experience the future of algorithmic trading</p>
          <a href="#contact" className="cta-button">
            Contact Us
            <span className="arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
