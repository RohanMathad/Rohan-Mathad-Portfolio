import React from 'react';
import { HeroCanvas } from '../../canvas/HeroCanvas/HeroCanvas';
import { Button } from '../../global/Button/Button';
import './Hero.module.scss';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    // overflow-hidden prevents the stretched canvas from causing scrollbars
    <section className="min-h-screen md:min-h-[819px] flex flex-col justify-center items-center text-center relative pt-24 md:pt-0 overflow-hidden">
      
      {/* 
        FULL-BLEED WORKAROUND:
        This div stretches from edge to edge of the screen.
      */}
      <div className="absolute inset-0 z-[-1] pointer-events-none w-full h-full overflow-hidden">
        {/* CSS Radial Gloom: Replaces the buggy WebGL plane with a flawless CSS glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06)_0%,_transparent_60%)]"></div>
        <HeroCanvas />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inline-flex items-center gap-2 glass-panel px-4 py-1.5 rounded-full mb-8 z-10 hidden md:inline-flex mt-[10vh]"
      >
        <span className="material-symbols-outlined text-[14px]">code</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase text-white">Frontend & Full-Stack Developer</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-display-xl text-[40px] md:text-display-xl max-w-4xl mx-auto leading-tight mb-6 z-10 text-white drop-shadow-md"
      >
        Build <span className="italic text-primary-fixed-dim">Scalable,</span> <br/>Impactful Web Experiences
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="font-body-lg text-body-md md:text-body-lg text-gray-300 max-w-[280px] md:max-w-2xl mx-auto mb-10 z-10 drop-shadow-sm"
      >
        <span className="md:hidden">Engineering precision meets editorial sophistication.</span>
        <span className="hidden md:inline">I engineer high-performance digital products blending deep technical expertise with a refined eye for design. Based in technical luxury.</span>
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex items-center gap-4 z-10"
      >
        <Button variant="primary">
          <span className="hidden md:inline">View Work</span>
          <span className="md:hidden">Let's Chat!</span>
          <span className="material-symbols-outlined md:text-[18px] text-sm">
            <span className="hidden md:inline">arrow_downward</span>
            <span className="md:hidden inline ml-1">arrow_forward</span>
          </span>
        </Button>
      </motion.div>
    </section>
  );
};