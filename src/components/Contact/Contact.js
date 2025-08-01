import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus({
            success: true,
            message: 'Your message has been sent successfully! We\'ll get back to you soon.'
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus({
            success: false,
            message: 'Failed to send message. Please try again later.'
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Contact Us</h2>
            <p className="section-subtitle">Have questions? We're here to help. Send us a message and we'll get back to you shortly.</p>
          </motion.div>
          
          <div className="contact-description">
            <p>We're committed to providing exceptional support. Whether you have questions about our services or need assistance, our team is ready to help you every step of the way.</p>
          </div>
        </div>

        <div className="contact-form-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Contact Information</h3>
            <p>Fill up the form and our Team will get back to you within 24 hours.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>123 Financial District, New York, NY 10005</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@dummycompany.com</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://twitter.com/quantumanalytics" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/company/quantum-analytics" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://t.me/quantumanalytics" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  required
                ></textarea>
              </div>
              
              {submitStatus.message && (
                <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <span>Send Message</span>
                    <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
