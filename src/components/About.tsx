import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    degree: 'Bachelor of Science in Computer Engineering',
    university: 'Texas A&M University',
    graduation: 'Class of 2022',
    location: 'College Station, TX',
  };

  return (
    <section id="about" className="py-20 theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold theme-text-primary mb-4">Education</h2>
          <div className="w-20 h-1 theme-accent-bg mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center theme-text-secondary"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{education.degree}</h3>
            <p className="text-xl mb-2">{education.university}</p>
            <p className="theme-text-muted">{education.graduation}</p>
            <p className="theme-text-muted">{education.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
