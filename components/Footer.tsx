import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-base pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png"
                alt="Good Life Publishing"
                className="h-32 w-auto object-contain" 
              />
            </div>
            <p className="text-secondary mb-6 max-w-sm leading-relaxed text-sm">
              Music publishing built around you. We empower artists to own their careers with transparent tools and fair deals.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-primary font-bold mb-6">Product</h4>
            <ul className="space-y-3 text-secondary text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-secondary text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Artists</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-primary font-bold mb-6">Connect</h4>
            <ul className="space-y-3 text-secondary text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Slack Community</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Events</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary font-medium">
          <div>© 2025 Good Life Publishing. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;