import React from 'react';
import { Section } from './ui/Section';
import { Crown, Zap, Headphones, Coins } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Crown size={28} className="text-accent" />,
      title: "You own everything",
      desc: "Keep 100% ownership of your masters and publishing rights. We never take a cut of your ownership."
    },
    {
      icon: <Zap size={28} className="text-accent" />,
      title: "Fast payments",
      desc: "Get paid every quarter, directly to your bank account. No minimum thresholds to withdraw your earnings."
    },
    {
      icon: <Headphones size={28} className="text-accent" />,
      title: "Expert support",
      desc: "Real humans, real industry experts. Our team is here to help you navigate the complex world of music."
    },
    {
      icon: <Coins size={28} className="text-accent" />,
      title: "Fair pricing",
      desc: "We only take a small commission from the royalties we collect on your behalf—no upfront costs, no hidden fees. We only earn when you earn."
    }
  ];

  return (
    <Section className="bg-base">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">We make it simple</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((item, index) => (
          <div 
            key={index} 
            className="group p-8 bg-white border border-border rounded-2xl hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-6 w-14 h-14 rounded-full bg-accent-light flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <div className="group-hover:text-white transition-colors text-accent">
                {/* Clone element to force color inheritance if needed, though class standard handles it */}
                {React.cloneElement(item.icon as React.ReactElement, { className: "currentColor" })}
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
            <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;