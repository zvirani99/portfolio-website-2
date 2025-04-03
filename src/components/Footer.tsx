import React from 'react';
import { Lock } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-darkgray text-white py-8">
			<div className="flex items-center space-x-4">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Zeeshan Virani. All rights reserved.
          </p>
        </div>
      </div>
			<a 
					href=""
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 hover:text-[#3DDC84] transition-colors content-end"
					>
					<Lock  size={24} />
				</a>
			</div>
    </footer>
  );
};

export default Footer;
