import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python',
    'AWS', 'Docker', 'GraphQL', 'PostgreSQL',
  ];

  const education = {
    degree: 'Bachelor of Science in Computer Engineering',
    university: 'Texas A&M University',
    graduation: 'Class of 2022',
    location: 'College Station, TX',
  };

  return (
    <section id="about" className="py-20 bg-darkgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#3DDC84] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8 text-gray-300">
              <h3 className="text-2xl font-semibold mb-4">{education.degree}</h3>
              <p className="text-xl mb-2">{education.university}</p>
              <p className="text-gray-400">{education.graduation}</p>
              <p className="text-gray-400">{education.location}</p>
            </div>
            <button className="inline-flex items-center px-6 py-3 bg-[#3DDC84] text-gray-900 rounded-lg hover:bg-[#32B76E] transition-colors">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-800 p-4 rounded-lg text-center text-gray-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
