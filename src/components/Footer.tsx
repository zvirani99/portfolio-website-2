import React from 'react';
import { Lock, Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="theme-bg theme-text-primary py-8">
      <div className="flex items-center space-x-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex items-center gap-3">
            <p className="theme-text-muted flex items-center gap-3">
              <Copyright size={24} />{new Date().getFullYear()} Zeeshan Virani. All rights reserved.
            </p>
                  <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="theme-text-muted theme-accent-hover transition-colors absolute right-12"
        >
          <Lock size={24} />
        </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
