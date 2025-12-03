import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

 const handleRedirect = () => {
    window.location.href = "https://forms.zohopublic.com/carlitoelipangm1/form/GoodLifePublishing/formperma/GpDKteN1fCCtmCp-k8FaFHI9_HXYvQrcD8TaTCsUCh0";
};


const StatCounter = ({ value, label, prefix = "", suffix = "" }: { value: number; label: string; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);

 

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-bold text-accent mb-1 tracking-tight">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-secondary text-sm font-medium">{label}</div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white to-transparent -z-10" />
      <div className="absolute top-20 right-[-100px] w-[600px] h-[600px] bg-accent-light/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-40 left-[-200px] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-semibold mb-8 hover:bg-opacity-80 transition-colors cursor-default">
            For the self-made
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight">
            Music publishing <br/>
            built around <span className="text-accent relative inline-block">
              you
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-light -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
            .
          </h1>
          
          <p className="text-xl text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            Own your music. Own your career. We handle the admin so you can focus on creating.
          </p>

         <div className="flex flex-col items-center gap-6 mb-16">
          <button 
              onClick={handleRedirect} // This executes the function when clicked
              className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-hover hover:shadow-lg hover:-translate-y-1 transition-all shadow-soft-lg flex items-center gap-2 group"
          >
              Join today — it's free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
      </div>

          {/* Stats Section Integrated */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 border-t border-border pt-12 w-full max-w-4xl">
             <StatCounter value={50} label="Active Artists" suffix="+" />
             <StatCounter value={1} label="Collected Yearly" prefix="$" suffix="M+" />
             <StatCounter value={150} label="Countries Covered" suffix="+" />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;