import React from 'react';
import { Section } from './ui/Section';
import { Activity, Globe2, Smartphone, Play, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <Section id="features" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">One dashboard does it all</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">Track your earnings, manage your catalog, and watch your music work for you.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Features List */}
        <div className="lg:col-span-4 space-y-6">
          {[
            {
              icon: <Activity className="w-6 h-6 text-accent" />,
              title: "Real-time tracking",
              desc: "See your earnings update instantly across all platforms."
            },
            {
              icon: <Globe2 className="w-6 h-6 text-accent" />,
              title: "Global collection",
              desc: "We collect royalties from 150+ countries automatically."
            },
            {
              icon: <Smartphone className="w-6 h-6 text-accent" />,
              title: "Mobile ready",
              desc: "Manage everything on the go. Your career fits in your pocket."
            }
          ].map((feature, i) => (
            <div key={i} className="flex gap-5 p-6 rounded-2xl bg-base border border-transparent hover:border-border transition-all cursor-default group">
              <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-primary font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Mockup - Light Mode */}
        <div className="lg:col-span-8 relative perspective-1000">
          <div className="relative z-10 bg-white border border-border rounded-3xl p-8 shadow-soft-lg transform rotate-y-3 rotate-x-3 hover:rotate-0 transition-all duration-700 ease-out">
            {/* Header Mock */}
            <div className="flex justify-between items-center mb-10 border-b border-border pb-6">
              <div>
                <div className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">Total Earnings</div>
                <div className="text-4xl font-bold text-primary flex items-center gap-3">
                  $12,450.00 
                  <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp size={12} /> +12%
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <span className="text-sm font-medium text-secondary">Export</span>
                 <div className="w-10 h-10 rounded-full bg-base border border-border flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-accent"></div>
                 </div>
              </div>
            </div>

            {/* Chart Mock - Bars */}
            <div className="h-48 flex items-end justify-between gap-3 mb-10 px-2">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                <div key={i} className="w-full bg-accent-light rounded-t-lg relative group overflow-hidden" style={{ height: `${h}%` }}>
                   <div className="absolute bottom-0 w-full bg-accent h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Song List Mock */}
            <div className="space-y-4">
              {[
                { title: "Midnight City Blues", streams: "1.2M", rev: "$4,200" },
                { title: "Neon Heartbeat", streams: "850K", rev: "$2,800" },
                { title: "Summer Breeze", streams: "620K", rev: "$1,950" }
              ].map((song, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-base border border-transparent hover:border-border transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-accent">
                        <Play size={14} fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-primary font-bold text-sm">{song.title}</div>
                      <div className="text-secondary text-xs">Original Mix</div>
                    </div>
                  </div>
                  <div className="flex gap-8 text-sm items-center">
                    <span className="text-secondary font-medium">{song.streams} streams</span>
                    <span className="text-primary font-bold">{song.rev}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-accent/5 blur-[80px] -z-10 transform translate-y-10"></div>
        </div>
      </div>
    </Section>
  );
};

export default Features;