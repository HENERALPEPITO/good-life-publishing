import React from 'react';
import { motion } from 'framer-motion';
import { ChildrenProps } from '../../types';

interface SectionProps extends ChildrenProps {
  className?: string;
  id?: string;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, delay = 0 }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
        className="container mx-auto px-6 md:px-12 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
};

export const FadeIn: React.FC<ChildrenProps & { delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);