import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 gradient-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-4">
            <Mail className="text-neon-blue" />
            <a href="mailto:sukhisthebest3@gmail.com" className="hover:text-neon-blue transition-colors">
              sukhisthebest3@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Phone className="text-neon-blue" />
            <a href="tel:+917983069544" className="hover:text-neon-blue transition-colors">
              +91 7983069544
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/frostic-burn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/atinderpal-sing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <p className="text-gray-400 mt-12 italic">
            "Let's build something crazy together 🚀. Shoot your ideas my way."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;