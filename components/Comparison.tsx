import React from 'react';
import { Section, FadeIn } from './ui/Section';
import { X, Check } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <Section className="bg-base">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">We believe in artists</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">The industry has been broken for too long. We're here to fix it.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* The Old Way */}
        <FadeIn>
          <div className="h-full p-10 rounded-3xl bg-white border border-border shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3">
              The old way
            </h3>
            <ul className="space-y-6">
              {[
                "Complex contracts and hidden fees",
                "Months waiting for royalty payments",
                "No transparency on where your money goes",
                "Locked into unfair deals"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-secondary group-hover:text-primary transition-colors">
                  <div className="mt-1 p-1 rounded-full bg-gray-100 text-gray-400">
                    <X size={14} strokeWidth={3} />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* The Good Life Way */}
        <FadeIn delay={0.2}>
          <div className="h-full p-10 rounded-3xl bg-white border border-accent/20 shadow-soft-lg relative overflow-hidden group hover:border-accent/40 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              The Good Life way
            </h3>
            <ul className="space-y-6">
              {[
                "Simple, fair pricing — no surprises",
                "Fast, direct payments to your account",
                "Full transparency with real-time tracking",
                "You stay in control, always"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-primary font-medium">
                  <div className="mt-1 p-1 rounded-full bg-accent text-white">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

export default Comparison;