import React from 'react';
import { Section } from './ui/Section';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Indie Artist",
      location: "Los Angeles, CA",
      quote: "Finally, a publisher that understands independent artists. The dashboard is intuitive and the payments are always on time.",
      image: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Marcus Johnson",
      role: "Producer",
      location: "Nashville, TN",
      quote: "Good Life changed the game for me. I used to chase royalties for months. Now I see everything in real-time.",
      image: "https://picsum.photos/seed/marcus/100/100"
    },
    {
      name: "Ella Chen",
      role: "Singer-Songwriter",
      location: "London, UK",
      quote: "Total transparency. I know exactly where my money comes from. It feels good to be in control of my career.",
      image: "https://picsum.photos/seed/ella/100/100"
    }
  ];

  return (
    <Section id="artists" className="bg-white">
       <div className="grid md:grid-cols-3 gap-8">
         {testimonials.map((t, i) => (
           <div key={i} className="p-8 rounded-3xl bg-base border border-border flex flex-col justify-between hover:shadow-soft transition-all">
             <div>
               <div className="flex gap-1 mb-6">
                 {[1,2,3,4,5].map(star => <Star key={star} size={16} className="text-accent fill-accent" />)}
               </div>
               <p className="text-primary text-lg mb-8 font-medium leading-relaxed">"{t.quote}"</p>
             </div>
             
             <div className="flex items-center gap-4">
               <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
               <div>
                 <div className="text-primary font-bold text-sm">{t.name}</div>
                 <div className="text-secondary text-xs uppercase font-bold tracking-wider">{t.role}</div>
               </div>
             </div>
           </div>
         ))}
       </div>
    </Section>
  );
};

export default Testimonials;