import React from 'react';
import { motion } from 'framer-motion';
import './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer 
      id="contact" 
      className="w-full mx-auto md:max-w-container-max md:px-margin-desktop py-20 flex flex-col items-center relative overflow-hidden bg-surface border-t border-outline-variant md:border-white/5 mt-auto"
      >
      
      {/* 
        Desktop/Tablet Foreground 
        Animates first as soon as it enters the viewport
      */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex flex-col items-center w-full relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-6">Ready to build something <span className="italic text-primary-fixed-dim">extraordinary?</span></h2>
          <a href="mailto:rohan.demo@example.com" className="font-body-lg text-body-lg text-primary hover:text-white underline underline-offset-8 transition-colors">rohan.demo@example.com</a>
        </div>
        <div className="flex gap-8 mb-16">
          <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-white transition-opacity duration-300">LinkedIn</a>
          <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-white transition-opacity duration-300">GitHub</a>
          <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-white transition-opacity duration-300">Twitter</a>
          <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-white transition-opacity duration-300">Email</a>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="font-label-sm text-label-sm text-on-surface-variant mb-8">© 2026 Rohan. All Rights Reserved</p>
        </div>
      </motion.div>

      {/* 
        Mobile Foreground 
        Matches the desktop animation timing
      */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6 w-full px-6 md:hidden relative z-10"
      >
        <ul className="flex flex-col gap-4">
          <li><a href="#" className="font-body-md text-body-md text-outline hover:text-primary transition-opacity">GITHUB</a></li>
          <li><a href="#" className="font-body-md text-body-md text-outline hover:text-primary transition-opacity">LINKEDIN</a></li>
          <li><a href="#" className="font-body-md text-body-md text-outline hover:text-primary transition-opacity">RESUME</a></li>
        </ul>
        <p className="font-body-md text-sm text-on-surface-variant">© 2026 Rohan. ENGINEERED WITH PRECISION.</p>
      </motion.div>

      {/* 
        HUGE WATERMARK FIX WITH DELAYED RE-ANIMATION:
        - Removed translate-y-[10%] so it sits higher and is clearly visible.
        - Added 'delay: 0.4' so it waits for the foreground text to appear first.
      */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className="font-display-xl text-[35vw] md:text-[28vw] tracking-tighter select-none leading-none absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-white/30 to-transparent bg-clip-text text-transparent pointer-events-none whitespace-nowrap"
      >
        ROHAN
      </motion.div>
    </footer>
  );
};