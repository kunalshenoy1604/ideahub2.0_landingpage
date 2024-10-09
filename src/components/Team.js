import React from 'react';
import { motion } from 'framer-motion';

const TeamMember = ({ name, role }) => (
  <motion.div
    whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(131,82,253,0.9)' }}
    className="bg-gray-800 p-4 rounded-lg neon-team-member"
  >
    <h3 className="text-xl font-bold neon-text">{name}</h3>
    <p className="text-lg">{role}</p>
  </motion.div>
);

const Team = () => {
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
        Meet the Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TeamMember name="Kunal Shenoy" role="IdeaHub Lead" email="shenoykunal1309@gmail.com" />
        <TeamMember name="Ananya Mishra" role="Creatives HoD, IdeaHub" />
        <TeamMember name="Neha" role="Creatives HoD, IdeaHub" />
        <TeamMember name="Rishi Mundada" role="Public Relations HoD, IdeaHub" />
        <TeamMember name="Agrima Parashar" role="Public Relations HoD, IdeaHub" />
        <TeamMember name="Dedeepya Vedula" role="Marketing HoD, IdeaHub" />
        <TeamMember name="Prit Panvalkar" role="Marketing HoD, IdeaHub" />
        <TeamMember name="Gunjan Tembhurnikar" role="IdeaHub Executive" />
        <TeamMember name="Lakshita" role="IdeaHub Executive" />
        <TeamMember name="Tiyaa Rana" role="IdeaHub Executive" />
        <TeamMember name="Neeraja Murali" role="TechCider Co-Head" />
      </div>
    </motion.section>
  );
};

export default Team;
