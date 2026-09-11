import React from 'react';
import { motion } from 'framer-motion';
import { SkillItem } from './Skills.types';
import './Skills.module.scss';

const skillsData: SkillItem[] = [
  {
    id: 'core',
    number: '01',
    icon: 'data_object',
    title: 'Core Ecosystem',
    description: 'Deep expertise in modern JavaScript frameworks and core web technologies.',
    tags: ['React', 'TypeScript', 'Next.js']
  },
  {
    id: 'styling',
    number: '02',
    icon: 'palette',
    title: 'Styling & UI',
    description: 'Crafting pixel-perfect, accessible, and performant user interfaces.',
    tags: ['Tailwind CSS', 'Framer Motion', 'SASS']
  },
  {
    id: 'state',
    number: '03',
    icon: 'database',
    title: 'State & Data',
    description: 'Robust architecture for managing complex application state and data fetching.',
    tags: ['Redux Toolkit', 'GraphQL', 'React Query']
  },
  {
    id: 'workflow',
    number: '04',
    icon: 'architecture',
    title: 'Workflow',
    description: 'Efficient CI/CD pipelines, testing methodologies, and collaborative practices.',
    tags: ['Git', 'Jest', 'Docker']
  }
];

export const Skills: React.FC = () => {
  return (
    // ADDED px-6 here for mobile margins. md:px-margin-desktop keeps desktop completely untouched!
    <section id="skills" className="scroll-mt-32 w-full max-w-container-max mx-auto px-6 md:px-margin-desktop mb-24 md:mb-0">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="flex flex-col items-center mb-8 md:mb-16 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full md:rounded border border-outline-variant bg-surface-container md:mb-4 glass-card md:glass-none self-start md:self-center mb-6">
          <span className="material-symbols-outlined text-[14px] md:text-[14px] text-primary">terminal</span>
          <span className="font-label-sm text-label-sm text-primary md:text-secondary uppercase tracking-widest hidden md:inline">✦ Technical Arsenal</span>
          <span className="font-label-sm text-label-sm text-primary uppercase inline md:hidden">Technical Arsenal</span>
        </div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg hidden md:block">Core Competencies</h2>
      </motion.div>

      {/* Skills Grid with Staggered Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={skill.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            // once: true ensures it only animates the first time you see it
            viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
            // The magic is here: 0.2s base delay + (index * 0.15s) stagger
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.9 + (index * 0.15) }}
            className="glass-card md:glass-panel p-6 md:p-8 rounded-[24px] flex flex-col h-full group hover:bg-white/[0.05] transition-colors duration-500"
          >
            <div className="flex gap-4 md:block">
              <div className="w-12 h-12 rounded-xl bg-white/5 md:bg-surface-container-high border border-white/10 md:border-outline-variant flex items-center justify-center mb-0 md:mb-6 shrink-0">
                <span className="material-symbols-outlined text-primary">{skill.icon}</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-headline-md text-xl mb-2 md:mb-4 text-on-background md:text-on-surface">{skill.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-0 md:mb-6 flex-grow">
                  {skill.description}
                </p>
              </div>
            </div>
            
            <div className="hidden md:flex flex-wrap gap-2 mt-auto">
              {skill.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded bg-surface-container border border-outline-variant font-label-sm text-[10px] text-on-surface-variant">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};