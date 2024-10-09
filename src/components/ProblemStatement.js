import React from 'react';
import { motion } from 'framer-motion';

const domains = [
  "Artificial Intelligence & Machine Learning",
  "Innovative Applications",
  "Digital Entertainment",
  "Financial Technology",
];

const ProblemStatement = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="my-10 text-center"
    >
      <h2 className="text-3xl font-bold neon-text mb-6 mt-8">Problem Statement Domains</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {domains.map((domain, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="octagon bg-gray-800 p-6 text-center neon-border text-lg flex items-center justify-center"
          >
            {domain}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProblemStatement;
