import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const StatItem = ({ label, value }) => (
  <motion.div
    whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px rgba(131,82,253,0.8)' }}
    className="bg-gray-800 p-6 rounded-lg text-center neon-stat-item"
  >
    <CountUp
      end={value}
      duration={2.5}
      className="text-4xl font-bold text-blue-400 neon-text"
    />
    <p className="mt-2 neon-text">{label}</p>
  </motion.div>
);

const Stats = () => {
  const stats = [
    { label: 'Registrations', value: 341 },
    { label: 'Registered Teams', value: 157 },
    { label: 'Views', value: 19894 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="my-10 neon-section"
    >
      <motion.h2
        className="text-3xl font-bold mb-6 neon-text"
        whileHover={{ scale: 1.05, textShadow: '0px 0px 10px rgba(255,255,255,1)' }}
      >
        Last Year's Impact
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </motion.section>
  );
};

export default Stats;
