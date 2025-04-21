import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>
        
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-6 neon-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-neon-blue" />
              <h3 className="text-xl font-semibold">City Lead - Event Manager</h3>
            </div>
            <p className="text-gray-400 mb-2">NewBi Entertainment</p>
            <p className="text-gray-300">
              Handled backstage operations and crowd control at Dil-luminati Concert and Bangr Carnival in Chandigarh.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-6 neon-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-neon-blue" />
              <h3 className="text-xl font-semibold">Chandigarh University</h3>
            </div>
            <p className="text-gray-400 mb-2">Bachelor of Engineering, Computer Science</p>
            <p className="text-gray-300">Aug 2024–May 2028</p>
            <p className="text-gray-300">SGPA: 6.57</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;