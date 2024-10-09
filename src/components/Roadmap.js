import React from 'react';
import { motion } from 'framer-motion';

const roadmapData = [
  { date: '10th October', description: 'Beginning of registrations' },
  { date: '15th October', description: 'Trivia Round (50 MCQ questions)' },
  { date: '16th October', description: 'Problem statements are released' },
  { date: '18th October', description: 'Ideation Circuit Round' },
  { date: '19th October', description: 'Vision Pitch' },
];

const Roadmap = () => {
  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Event Roadmap</h2>
      <div className="relative roadmap-container h-96 w-full">
        {roadmapData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="absolute roadmap-item bg-blue-800 text-white rounded-lg p-4"
            style={{ top: `${index * 20}%`, left: `${(index % 2) * 50}%` }}
          >
            <h3 className="text-lg font-bold">{item.date}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
