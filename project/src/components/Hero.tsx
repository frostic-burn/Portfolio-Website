import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Atinderpal Singh
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Engineer | Innovator | Builder of Real-World Solutions
        </motion.h2>
        
        <motion.p 
          className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I'm a Computer Science student at Chandigarh University, passionate about Embedded Systems, IoT, Web Development, and building futuristic tech. Let's create the future together.
        </motion.p>
        
        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="/resume.pdf" 
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-neon-blue/10 hover:bg-neon-blue/20 border border-neon-blue transition-all duration-300"
          >
            <FileText size={20} />
            Download Resume
          </a>
          <a 
            href="https://github.com/frostic-burn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
          >
            <Github size={20} />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/atinderpal-sing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;