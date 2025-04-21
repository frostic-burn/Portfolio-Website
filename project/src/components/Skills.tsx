import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Globe, Brain, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C/C++', 'JavaScript', 'Java', 'SQL', 'HTML', 'Kotlin'],
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: 'Developer Tools',
    skills: ['Google Cloud', 'VS Code', 'Arduino IDE', 'Google CoLab'],
    icon: <Terminal className="w-6 h-6" />
  },
  {
    title: 'Hardware & Embedded',
    skills: ['Arduino', 'ESP32', 'Raspberry Pi'],
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: 'Networking',
    skills: ['TCP/IP', 'WebSockets', 'HTTP', 'MQTT'],
    icon: <Globe className="w-6 h-6" />
  }
];

const SkillCategory = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800/50 rounded-xl p-6 neon-border"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-neon-blue">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full bg-gray-700/50 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;