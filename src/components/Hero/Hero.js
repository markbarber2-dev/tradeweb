import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';


const Hero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Particle animation effect
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.9;

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 9000);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(108, 99, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        particles[i].update();
        particles[i].draw();
      }
      
      animationId = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.9;
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={particlesRef} className="particles-canvas"></canvas>
      <div className="container">
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Next Generation Financial Solutions
            </motion.span>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Revolutionizing <span className="highlight">Financial Markets</span> with AI & Machine Learning
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Harness the power of advanced analytics and algorithmic trading to maximize your investment returns. 
              Our cutting-edge technology delivers superior performance in crypto and traditional markets.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <a href="#contact" className="btn primary-btn">
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
              </a>
              <a href="#features" className="btn secondary-btn">
                <FontAwesomeIcon icon={faPlayCircle} className="btn-icon" />
                Learn More
              </a>
            </motion.div>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div className="stat-item">
                <span className="stat-number">$1B+</span>
                <span className="stat-label">Assets Under Management</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Global Clients</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          >
            <div className="visual-grid">
              <div className="visual-card market-trends">
                <div className="card-header">
                  <h4>Market Trends</h4>
                  <span className="trend-up">+2.4% <span className="trend-arrow">↑</span></span>
                </div>
                <div className="sparkline">
                  <svg width="100%" height="100%" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <path d="M0,60 Q50,40 100,50 T200,30 T300,40" 
                          stroke="#6c63ff" 
                          strokeWidth="2" 
                          fill="none"
                          strokeLinecap="round" 
                          strokeLinejoin="round" />
                    <path d="M0,60 Q50,40 100,50 T200,30 T300,40 L300,80 L0,80 Z" 
                          stroke="none" 
                          fill="url(#sparkline-fill)"
                          style={{opacity: 0.8}} />
                    <defs>
                      <linearGradient id="sparkline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6c63ff" />
                        <stop offset="100%" stopColor="#8a84ff" />
                      </linearGradient>
                      <linearGradient id="sparkline-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(108, 99, 255, 0.2)" />
                        <stop offset="100%" stopColor="rgba(108, 99, 255, 0)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="market-stats">
                  <div className="market-stat">
                    <span className="stat-label">BTC/USD</span>
                    <span className="stat-value">$42,850.30</span>
                  </div>
                  <div className="market-stat">
                    <span className="stat-label">24h Change</span>
                    <span className="stat-value positive">+1.8%</span>
                  </div>
                </div>
              </div>
              
              <div className="visual-card portfolio">
                <h4>Portfolio Allocation</h4>
                <div className="donut-chart">
                  <svg width="100%" height="100%" viewBox="0 0 200 200">
                    <path d="M100,20 A80,80 0 1,1 100,180 A80,80 0 1,1 100,20 M100,40 A60,60 0 1,0 100,160 A60,60 0 1,0 100,40 Z" 
                          fill="#1a1a2e" />
                    <path d="M100,20 A80,80 0 0,1 180,100 L100,100 Z" fill="#6c63ff" />
                    <path d="M180,100 A80,80 0 0,1 100,180 L100,100 Z" fill="#8a84ff" />
                    <path d="M100,180 A80,80 0 0,1 20,100 L100,100 Z" fill="#6c5ce7" />
                    <path d="M20,100 A80,80 0 0,1 100,20 L100,100 Z" fill="#a29bfe" />
                    <circle cx="100" cy="100" r="60" fill="#0a0a1a" />
                    <text x="100" y="95" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="600">$1.2M</text>
                    <text x="100" y="120" textAnchor="middle" fill="#b8b8d1" fontSize="12">Total Value</text>
                  </svg>
                </div>
                <div className="portfolio-legend">
                  <div className="legend-item">
                    <span className="legend-color" style={{backgroundColor: '#6c63ff'}}></span>
                    <span>Stocks (40%)</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{backgroundColor: '#8a84ff'}}></span>
                    <span>Crypto (35%)</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{backgroundColor: '#6c5ce7'}}></span>
                    <span>Bonds (15%)</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{backgroundColor: '#a29bfe'}}></span>
                    <span>Cash (10%)</span>
                  </div>
                </div>
              </div>
            
            <div className="visual-card performance">
              <div className="card-header">
                <h4>Performance (YTD)</h4>
              </div>
              <div className="chart-container">
                <div className="bar-chart">
                  {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, index) => {
                    const height = Math.floor(Math.random() * 80) + 20;
                    return (
                      <div key={index} className="bar-container">
                        <div 
                          className="bar" 
                          style={{
                            height: `${height}%`,
                            background: 'linear-gradient(to top, #6c63ff, #8a84ff)'
                          }}
                        ></div>
                        <div className="bar-label">{month}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="performance-stats">
                <div className="stat">
                  <div className="stat-value">+12.5%</div>
                  <div className="stat-label">Return</div>
                </div>
                <div className="stat">
                  <div className="stat-value">8.2%</div>
                  <div className="stat-label">Volatility</div>
                </div>
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
