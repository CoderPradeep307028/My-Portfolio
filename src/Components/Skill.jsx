import React from 'react';
import Card from './Card';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJs, FaDatabase } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import { motion } from 'framer-motion';
import { SiTailwindcss } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";

function Skill() {
  const skillSet = [
    { skill: 'React', icon: <FaReact /> },
    { skill: 'JavaScript', icon: <FaJs /> },
    { skill: 'HTML5', icon: <FaHtml5 /> },
    { skill: 'CSS3', icon: <FaCss3Alt /> },
    { skill: 'Node.js', icon: <FaNodeJs /> },
    { skill: 'Express.js', icon: <FaNodeJs /> },
    { skill: 'MongoDB', icon: <DiMongodb /> },
    { skill: 'Data Structures', icon: <FaDatabase /> },
    { skill: 'Tailwind CSS' , icon:<SiTailwindcss/>},
    { skill: 'C++' , icon:<SiCplusplus/>}
  ];

  return (
    <div className="px-[10vw] py-12 bg-gradient-to-b from-white to-emerald-50 ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-emerald-700 mb-10"
      >
        My Skills
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {skillSet.map((item, index) => (
          <Card key={index} skill={item.skill} icon={item.icon} />
        ))}
      </motion.div>
    </div>
  );
}

export default Skill;
