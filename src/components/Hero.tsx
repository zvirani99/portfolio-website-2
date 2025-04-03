import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-[#3DDC84] mb-4">
            Zeeshan Virani
          </h1>
          <h2 className="text-lg md:text-xl text-gray-100 mb-6">
            Software Engineer @ Midtronics
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            2006 Time Magazine's Person of the Year.
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
              href="https://www.linkedin.com/in/zeeshanvirani99/"
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
            <div className="w-full h-full bg-darkgray rounded-full overflow-hidden p-1 relative z-10"> {/* Added z-10 */}
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGRftpmfVCfLg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728351839058?e=1749081600&v=beta&t=DrNCG5QVwblAHJiNnaSDecwsii8XGo8_n-qgnrw45UY"
                alt="Zeeshan Virani"
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            {/* Inner motion div for the rotating border */}
            <motion.div
              className="absolute -inset-1 rounded-full" // Position and shape
              style={{
                padding: '4px', // Creates the border thickness
                background: `conic-gradient(#3DDC84, transparent 30%, transparent 70%, #3DDC84)`, // The gradient for the border
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
