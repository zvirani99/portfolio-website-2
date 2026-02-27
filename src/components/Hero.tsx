import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Palette } from 'lucide-react';

interface HeroProps {
  onToggleTheme: () => void;
  theme: 'default' | 'ocean';
}

const Hero = ({ onToggleTheme, theme }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold theme-accent mb-4">
            Zeeshan Virani
          </h1>
          <h2 className="text-lg md:text-xl theme-text-primary mb-6">
            Senior Software Engineer @ Midtronics
          </h2>
          <p className="text-lg theme-text-muted mb-8">
            2006 Time Magazine's Person of the Year.
          </p>
          <div className="flex items-center space-x-4">
            <button className="inline-flex items-center px-6 py-3 rounded-full transition-colors theme-accent-bg theme-accent-contrast theme-accent-bg-hover">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
            <a
              href="https://github.com/zvirani99"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-text-muted theme-accent-hover transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/zeeshanvirani99/"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-text-muted theme-accent-hover transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:me@zeeshanvirani.com"
              className="theme-text-muted theme-accent-hover transition-colors"
            >
              <Mail size={24} />
            </a>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle color theme"
              className={`transition-colors ${
                theme === 'ocean' ? 'theme-accent' : 'theme-text-muted theme-accent-hover'
              }`}
            >
              <Palette size={24} />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Profile Picture Section */}
        <div className="relative aspect-square flex items-center justify-center">
          {/* Outer motion div for entrance animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-[300px] md:max-w-[400px] aspect-square"
          >
            {/* Container for the actual image */}
            <div className="w-full h-full theme-surface rounded-full overflow-hidden p-1 relative z-10">
              <img
                src="/headshot.JPG"
                alt="Zeeshan Virani"
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            {/* Inner motion div for the rotating border */}
            <motion.div
              className="absolute -inset-1 rounded-full" // Position and shape
              style={{
                padding: '4px', // Creates the border thickness
                background:
                  'conic-gradient(var(--color-accent), transparent 30%, transparent 70%, var(--color-accent))', // The gradient for the border
              }}
              animate={{ rotate: 360 }} // Animate rotation
              transition={{
                duration: 2,
                ease: 'linear',
                repeat: Infinity, // Loop indefinitely
              }}
            /> {/* No content inside the border div */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
