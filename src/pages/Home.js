import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import About from './About';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Services />
      <Contact />
    </motion.div>
  );
};

export default Home;
