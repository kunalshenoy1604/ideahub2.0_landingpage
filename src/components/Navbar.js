import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-4 border-b border-blue-500 shadow-lg"
      style={{ boxShadow: '0px 0px 10px 2px rgba(131,82,253,0.5)' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.2, textShadow: '0px 0px 8px rgba(131,82,253,0.9)' }}
          className="text-3xl font-extrabold neon-text"
        >
          IdeaHub 2.0
        </motion.div>
        <ul className="flex space-x-4">
          {['Home', 'Challenges', 'Sponsors', 'Team'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255,255,255,0.8)' }}
              className="cursor-pointer text-lg neon-text"
              onClick={() => {
                // Handle click to scroll to specific sections or do nothing
                console.log(`${item} clicked`); // Optional for logging
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
