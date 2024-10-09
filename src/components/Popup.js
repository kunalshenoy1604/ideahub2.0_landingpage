import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Popup = () => {
  const [show, setShow] = useState(true);

  return (
    show && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-0 right-0 bg-blue-900 p-6 text-white rounded-lg m-4 shadow-lg"
      >
        <h2 className="text-lg font-bold mb-2">Register Now!</h2>
        <p>Join IdeaHub 2.0 and compete in the ultimate tech challenge.</p>
        <a
          href="https://unstop.com"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Register at Unstop
        </a>
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-white"
        >
          X
        </button>
      </motion.div>
    )
  );
};

export default Popup;
