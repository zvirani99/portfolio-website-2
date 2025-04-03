import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#3DDC84] mb-4">
            Zeeshan Virani
          </h1>
          <h2 className="text-lg md:text-xl text-gray-100 mb-6">
            Software Engineer
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Texas A&M Alumni passionate about building exceptional digital experiences.
          </p>
          <div className="flex items-center space-x-4">
            <button className="inline-flex items-center px-6 py-3 bg-[#3DDC84] text-gray-900 rounded-full hover:bg-[#32B76E] transition-colors">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
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
          <motion.div
            className="w-full h-full rounded-full border-4 p-2"
            style={{ borderColor: '#3DDC84' }}
            animate={{
              borderColor: ['#3DDC84', '#2563EB', '#3DDC84'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Zeeshan Virani"
              className="rounded-full w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
