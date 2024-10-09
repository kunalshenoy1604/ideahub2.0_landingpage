import React from 'react';
import { motion } from 'framer-motion';

const SponsorLogo = ({ src, name }) => (
  <motion.div
    whileHover={{ scale: 1.15, boxShadow: '0px 0px 15px rgba(131,82,253,1)' }}
    className="bg-white p-4 rounded-lg flex items-center justify-center neon-logo"
  >
    <img src={src} alt={`${name} logo`} className="max-w-full h-auto" />
  </motion.div>
);

const Sponsors = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="my-10 neon-section"
    >
      <motion.h2
        className="text-3xl font-bold mb-6 neon-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05, textShadow: '0px 0px 10px rgba(255,255,255,1)' }}
      >
        Our Sponsors
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <motion.h3
            className="text-xl mb-2 neon-text"
            whileHover={{ scale: 1.05, textShadow: '0px 0px 8px rgba(255,255,255,1)' }}
          >
            Powered By
          </motion.h3>
          <SponsorLogo 
            name="Unstop" 
            src="/images/unstop_img.png" // Path to your Unstop logo
          />
        </div>
        <div>
          <motion.h3
            className="text-xl mb-2 neon-text"
            whileHover={{ scale: 1.05, textShadow: '0px 0px 8px rgba(255,255,255,1)' }}
          >
            In Association With
          </motion.h3>
          <SponsorLogo 
            name="GD Works" 
            src="/images/gd_works.png" // Path to your GD Works logo
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
