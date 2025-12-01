import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FaqItem } from '../types';

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-accent' : 'text-primary group-hover:text-accent'}`}>
          {item.question}
        </span>
        <span className={`ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-accent text-white' : 'bg-base text-secondary group-hover:bg-accent-light group-hover:text-accent'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-secondary leading-relaxed pr-8 max-w-3xl">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    { question: "What exactly is music publishing?", answer: "Music publishing is the business of managing the rights to your songs (the composition). We ensure you collect royalties whenever your music is streamed, performed live, played on radio, or used in TV/film." },
    { question: "How do I get paid and how often?", answer: "We pay out royalties every three months via direct deposit, PayPal, or wire transfer. Once we collect the money from global societies, it appears in your dashboard instantly." },
    { question: "Do you take ownership of my music?", answer: "Absolutely not. You retain 100% of your copyright ownership. We simply administer the rights on your behalf for a term, and you can leave whenever you want after the initial period." },
    { question: "How long does it take to get started?", answer: "Signing up takes about 5 minutes. Because we can’t accept every applicant at this stage, we’ll first review and approve your profile (within 24 hours). Once approved and your catalog is uploaded, we’ll register your songs and deliver them to international collection societies within 48 hours." },
    { question: "What territories do you cover?", answer: "We cover 150+ countries. We have direct relationships with major societies like ASCAP, BMI, PRS, GEMA, and SACEM, plus sub-publishers in emerging markets." },
    { question: "What if my music is already registered elsewhere?", answer: "We can help you transfer your catalog. Our onboarding team handles the letters of direction to switch administration to Good Life without losing historical data." }
  ];

  return (
    <Section id="faq" className="bg-base">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Questions?<br/>We've got answers.</h2>
          <p className="text-secondary mb-8 text-lg">Can't find what you're looking for?</p>
          <button className="text-accent font-bold flex items-center gap-2 hover:text-accent-hover transition-colors group">
            Contact our support team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>
        <div className="md:col-span-8 bg-white p-8 rounded-3xl border border-border shadow-sm">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;