import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectItem } from './Projects.types';
import proj1Img from "../../../../assets/images/2026-08-23 16_22_16-Greenshot.png"
import proj2Img from "../../../../assets/images/2026-08-23 16_18_23-Greenshot.png"
import proj3Img from "../../../../assets/images/2026-09-02 11_54_51-Greenshot.png"

const projectsData: ProjectItem[] = [
  {
    id: 'p1',
    category: 'Project Management',
    title: 'Orbit Workspace',
    description: 'An enterprise project tracking software featuring a real-time Kanban board, strict RBAC, & team chat, built with React, TypeScript, and Firebase.',
    imageUrl: proj1Img,
    link: 'https://enterprise-project-management-syste.vercel.app/login'
  },
  {
    id: 'p2',
    category: 'SaaS',
    title: 'Agile Flow Tool',
    description: 'Full-stack AI SaaS app with React frontend, Clerk authentication, subscription management, and AI tools for blogs, images, and resumes.',
    imageUrl: proj2Img,
    link: 'https://aisaas-app-three.vercel.app/'
  },
  {
    id: 'p3',
    category: 'Frontend / UI',
    title: 'Accredian Enterprise Portal',
    description: 'An enterprise portal engineered with Next.js, React, and Redux, featuring modular UI architecture, seamless navigation, responsive design.',
    imageUrl: proj3Img,
    link: 'https://accredian-enterprise-clone-ruddy-six.vercel.app/'
  }
];

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);

  // ==========================================
  // 🎛️ CONTROL PANEL 1: SPACING & BLUR
  // ==========================================
  const cardVariants = {
    // FIXED: Explicitly set filter: 'blur(0px)' so it never gets stuck again!
    center: { x: '0%', scale: 1, zIndex: 10, opacity: 1, filter: 'blur(0px)' },
    
    // ADJUST THE 'x' VALUE TO PUSH SIDE CARDS FURTHER OUT
    // -110% pushes them mostly off-screen so they just barely peek in.
    // Kept a tiny 3px blur here. It's low enough that it won't crash the mobile GPU.
    left: { x: '-100%', scale: 0.85, zIndex: 5, opacity: 0.2, filter: 'blur(3px)' },
    right: { x: '100%', scale: 0.85, zIndex: 5, opacity: 0.2, filter: 'blur(3px)' },
    
    // Explicitly resetting the hidden blur to 0 so it doesn't cache incorrectly
    hidden: { x: '0%', scale: 0.5, zIndex: 0, opacity: 0, filter: 'blur(0px)' }
  };

  return (
    <section id="projects" className="scroll-mt-32 w-full max-w-[100vw] mx-auto mb-24 md:mb-0 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="flex flex-col items-center mb-8 md:mb-12 text-center md:text-left md:px-margin-desktop px-6 max-w-container-max mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full md:rounded border border-outline-variant bg-surface-container md:mb-4 glass-card md:glass-none self-start md:self-center mb-6 hidden md:inline-flex">
          <span className="material-symbols-outlined text-[14px]">grid_view</span>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">✦ Portfolio</span>
        </div>
        <div className="flex justify-between items-end border-b border-white/10 pb-4 w-full md:w-auto md:border-none md:pb-0">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg hidden md:block">Selected Works</h2>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background md:hidden"><span className="italic font-display-xl text-[36px]">Selected</span> Work</h2>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase md:hidden">
            0{projectsData.length}
          </span>
        </div>
      </motion.div>

      {/* 
        ==========================================
        🎛️ CONTROL PANEL 2: CONTAINER HEIGHT
        ==========================================
        Change h-[550px] below to make the overall slider section taller or shorter.
      */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center max-w-[1600px] mx-auto px-4"
      >
        <button onClick={handlePrev} className="absolute left-2 md:left-8 z-30 w-12 h-12 rounded-full glass-card border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <button onClick={handleNext} className="absolute right-2 md:right-8 z-30 w-12 h-12 rounded-full glass-card border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {projectsData.map((project, index) => {
          let position = 'hidden';
          if (index === currentIndex) position = 'center';
          else if (index === (currentIndex - 1 + projectsData.length) % projectsData.length) position = 'left';
          else if (index === (currentIndex + 1) % projectsData.length) position = 'right';

          return (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate={position}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} 
              
              /* 
                ==========================================
                🎛️ CONTROL PANEL 3: EXACT ASPECT RATIO (WIDTH x HEIGHT)
                ==========================================
                Here is the 3:4 aspect ratio! 
                Mobile: w-[85vw] h-[400px]
                Desktop: w-[360px] h-[480px] (which is exactly 3:4)
                
                Tweak these exact values if you want them fatter or taller.
              */
              className={`absolute w-[85vw] h-[400px] md:w-[900px] md:h-[500px] rounded-[24px] overflow-hidden glass-card md:glass-panel flex flex-col justify-end p-6 md:p-8 shadow-2xl will-change-transform transform-gpu`}
            >
              <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('${project.imageUrl}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10"></div>

              <div className="relative z-20 flex flex-col h-full justify-end">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-label-sm text-[10px] md:text-xs text-white">
                    {project.category}
                  </span>
                </div>
                <div>
                  <h3 className="font-display-xl text-2xl md:text-headline-md mb-2 text-white">{project.title}</h3>
                  <p className="font-body-md text-sm md:text-body-md text-gray-300 mb-4 md:mb-8 line-clamp-2">
                    {project.description}
                  </p>

                  <a
                    href={position === 'center' ? project.link : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary hover:text-white transition-colors pointer-events-auto"
                    onClick={(e) => {
                      if (position !== 'center') e.preventDefault();
                    }}
                  >
                    View project <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};