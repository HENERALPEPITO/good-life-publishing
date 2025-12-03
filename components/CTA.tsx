import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


const handleRedirect = () => {
    window.location.href = "https://forms.zohopublic.com/carlitoelipangm1/form/GoodLifePublishing/formperma/GpDKteN1fCCtmCp-k8FaFHI9_HXYvQrcD8TaTCsUCh0";
};

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white border-t border-border">
      {/* Background Shapes - Subtle */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent-light/40 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">
            Start collecting what you've earned
          </h2>
          <p className="text-xl text-secondary mb-10 mx-auto">
            Join our roster of independent artists taking control of their music publishing today.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <button 
            onClick={handleRedirect}
            className="bg-accent text-white text-lg font-bold py-5 px-10 rounded-full shadow-soft-lg hover:bg-accent-hover hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 group">
              Get started for free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;