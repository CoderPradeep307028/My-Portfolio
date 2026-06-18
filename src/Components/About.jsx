import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Pradeep from '../assets/Pradeep.jpg';
import { motion } from 'framer-motion';

function About() {
  return (
    <section
      className="bg-gradient-to-b from-white to-emerald-50 py-20 px-6 sm:px-10 md:px-[10vw]"
      id="about"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Hi, I'm{' '}
            <span className="font-semibold text-emerald-600">Pradeep Kumar</span>,
            a passionate web developer from Rajasthan. I specialize in building fast,
            responsive, and user-friendly websites using technologies like{' '}
            <span className="font-medium text-yellow-500">React.js</span>,{' '}
            <span className="font-medium text-yellow-500">Node.js, Express.js</span>, and{' '}
            <span className="font-medium text-yellow-500">Mongo DB</span>.
          </p>
          <p className="text-gray-600 mb-8">
            I enjoy turning complex problems into clean and efficient code, while also crafting
            seamless UI/UX for users. I'm constantly learning and aiming to build better products.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="rounded-full overflow-hidden border-[6px] border-emerald-600 shadow-lg w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 transition-transform hover:scale-105 duration-300">
            <img
              src={Pradeep}
              alt="Pradeep Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
