import React from 'react';
import { HeroCanvas } from '../../canvas/HeroCanvas/HeroCanvas';
import { Button } from '../../global/Button/Button';
import styles from './Hero.module.scss';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  // Function to smoothly scroll to the projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen md:min-h-[819px] flex flex-col justify-center items-start text-left relative pt-24 md:pt-0 overflow-hidden px-6 md:px-12 lg:px-24">

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
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
        className="inline-flex items-center gap-2 glass-panel px-4 py-1.5 rounded-full mb-8 z-10 hidden md:inline-flex mt-[10vh]"
      >
        <span className="material-symbols-outlined text-[14px]">code</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase text-white">Frontend & Full-Stack Developer</span>
      </motion.div>

      {/* Main H1 - Huge Display Size */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
        className="font-display-xl text-[40px] md:text-display-xl max-w-4xl leading-tight mb-2 z-10 text-white drop-shadow-md"
      >
        Hi! I'm <span className="italic text-primary-fixed-dim">Rohan</span>,
      </motion.h1>

      {/* Secondary H2 - Smaller Headline Size */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 2 }}
        className="font-headline-lg text-headline-lg-mobile md:text-headline-lg max-w-4xl leading-tight mb-6 z-10 text-white/90 drop-shadow-md"
      >
        I build scalable,<br></br> impactful web experiences.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 2 }}
        className="font-body-lg text-body-md md:text-body-lg text-gray-300 max-w-[280px] md:max-w-2xl mb-10 z-10 drop-shadow-sm"
      >
        <span className="md:hidden">Engineering precision meets editorial sophistication.</span>
        <span className="hidden md:inline">I engineer high-performance digital products blending deep technical expertise with a refined eye for design. Based in technical luxury.</span>
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 2 }}
        className="flex items-center gap-4 z-10"
        onClick={scrollToProjects}
        style={{ cursor: 'pointer' }}
      >
        {/* We removed the inline onClick on the span and let the parent wrapper handle the logic */}
        <Button className={styles.btnPointer} variant="primary">
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