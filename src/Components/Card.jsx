import React from 'react';
import { motion } from 'framer-motion';

function Card({ skill, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center w-52 h-52 justify-center text-center  hover:shadow-emerald-200 transition-shadow p-6 flex flex-col justify-between border border-gray-100"
    >
      <div className="text-5xl mb-4 text-emerald-600">{icon}</div>
      <h2 className="text-lg font-semibold text-gray-700">{skill}</h2>
    </motion.div>
  );
}

export default Card;
