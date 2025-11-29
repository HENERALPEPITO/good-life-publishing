import React from 'react';
import { motion } from 'framer-motion';

const VideoDisplay: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-base">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            >
              <source src="/videodisplay.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDisplay;
