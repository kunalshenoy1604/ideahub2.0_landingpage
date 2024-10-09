// WinnerPopup.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WinnerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 m-8">
      <button 
        onClick={togglePopup}
        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full shadow-lg focus:outline-none"
      >
        View Prizes
      </button>
      
      {isOpen && (
        <motion.div 
          className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-4">Prize Money</h2>
          <p className="text-xl text-blue-300">🏆 <span className="font-bold">Winners:</span> ₹10,000</p>
          <p className="text-xl text-blue-300">🥈 <span className="font-bold">Runner-Ups:</span> ₹8,500</p>
          <button 
            onClick={togglePopup} 
            className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-full focus:outline-none"
          >
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default WinnerPopup;
