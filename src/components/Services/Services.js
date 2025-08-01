import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faExchangeAlt, faRobot, faCogs } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: faExchangeAlt,
      title: 'Market Arbitrage',
      description: 'Leverage price differences across crypto and stock markets with our advanced arbitrage detection system.',
      delay: 0.1
    },
    {
      icon: faChartLine,
      title: 'Quantitative Analytics',
      description: 'Data-driven investment strategies powered by sophisticated quantitative models and backtesting.',
      delay: 0.2
    },
    {
      icon: faRobot,
      title: 'Algorithmic Trading',
      description: 'Automated trading strategies that execute with precision and speed in volatile markets.',
      delay: 0.3
    },
    {
      icon: faCogs,
      title: 'Custom Solutions',
      description: 'Tailored financial technology solutions to meet your specific investment needs.',
      delay: 0.4
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-content">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>What We Offer</h2>
            <p className="section-subtitle">Comprehensive financial solutions tailored to your needs</p>
          </motion.div>

          <div className="services-description">
            <p>We provide cutting-edge financial solutions that leverage the latest technology and data science to give you a competitive edge in today's dynamic markets. Our comprehensive suite of services is designed to meet the diverse needs of modern investors.</p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: service.delay
              }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Learn more <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
