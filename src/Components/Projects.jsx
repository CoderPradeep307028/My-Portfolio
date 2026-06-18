import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'FREE FUSION GYM',
    description: 'Created a MERN stack Gym Website with membership plans, workout schedules, and Gmail-integrated contact form.',
    tech: ['React.js', 'Express.js', 'MongoDB'],
    link: 'https://github.com/CoderPradeep307028/GYM.git',
  },
  {
    title: 'Swiggy Clone',
    description: 'Developed a responsive Swiggy-like food ordering UI with search, filters, and cart management using React.',
    tech: ['React.js', 'Firebase', 'Tailwind CSS'],
    link: 'https://github.com/CoderPradeep307028/-Food-delivery-website.git',
  },
  {
    title: 'Notes Organizer',
    description: 'Semester-wise notes manager for B.Tech students with login support.',
    tech: ['MERN', 'JWT', 'Tailwind'],
    link: '#',
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: 'spring' }
  })
};

function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-br from-white via-gray-50 to-emerald-50 py-20 px-6 md:px-[10vw]">
      <motion.h2 
        className="text-4xl font-bold text-emerald-700 text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-xl hover:shadow-emerald-200 transition-shadow p-6 flex flex-col justify-between border border-gray-100"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={index}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-emerald-100 text-emerald-700 text-sm px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-auto text-emerald-600 font-medium hover:underline"
            >
              View Code →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
