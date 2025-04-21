import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Akaal Thrifts',
    description: 'A full-stack e-commerce platform for a thrift store built with Node.js. Enables smooth online retail experience.',
    tech: ['Node.js', 'TypeScript', 'JavaScript', 'HTML', 'TSX'],
    category: 'Featured'
  },
  {
    title: 'Life Lane',
    description: 'Smart traffic light system prioritizing emergency vehicles with dynamic rerouting and live Google Maps API integration.',
    tech: ['React', 'Next.js', 'TS', 'Google Maps API'],
    category: 'Featured'
  },
  {
    title: 'Secure Credential Manager',
    description: 'Chrome extension + Android app automating Wi-Fi logins with secure credential management.',
    tech: ['JS', 'Chrome Extensions API', 'Android Studio'],
    category: 'Featured'
  },
  {
    title: 'Laser-Lymbal',
    description: 'Laser security system using facial recognition, hand tracking, ultrasonic radar. Tracks and paints targets.',
    tech: ['Python', 'C/C++', 'ESP32', 'Arduino'],
    category: 'Featured'
  },
  // Add more projects here...
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card"
    >
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-gray-700/50 text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href="#" className="text-neon-blue hover:text-neon-purple transition-colors">
          <Github size={20} />
        </a>
        <a href="#" className="text-neon-blue hover:text-neon-purple transition-colors">
          <ExternalLink size={20} />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
