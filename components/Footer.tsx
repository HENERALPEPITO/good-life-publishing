import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-base pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-8">
            <img 
              src="/logo.png"
              alt="Good Life Publishing"
              className="h-32 w-auto object-contain" 
            />
          </div>
          <p className="text-secondary mb-8 max-w-lg leading-relaxed text-sm">
            Music publishing built around you. We empower artists to own their careers with transparent tools and fair deals.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/goodlife_publishing/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/company/good-life-music-sl/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:hello@goodlife-publishing.com"
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col items-center gap-6 text-xs text-secondary font-medium">
          <div className="text-center">
            © 2025 Good Life Publishing. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;