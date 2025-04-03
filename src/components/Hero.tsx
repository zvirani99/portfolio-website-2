import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Hi, I'm Zeeshan Virani
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Software Engineer
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Texas A&M Alumni passionate about building exceptional digital experiences.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/zvirani99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#3DDC84] transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/zvirani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#3DDC84] transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:me@zeeshanvirani.com"
              className="text-gray-400 hover:text-[#3DDC84] transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square"
        >
          <div className="w-full h-full rounded-full border-4 border-[#3DDC84] p-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Zeeshan Virani"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
