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
    <section id="skills" className="scroll-mt-32 w-full max-w-container-max mx-auto md:px-margin-desktop mb-24 md:mb-0">
      <div className="flex flex-col items-center mb-8 md:mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full md:rounded border border-outline-variant bg-surface-container md:mb-4 glass-card md:glass-none self-start md:self-center mb-6">
          <span className="material-symbols-outlined text-[14px] md:text-[14px] text-primary">terminal</span>
          <span className="font-label-sm text-label-sm text-primary md:text-secondary uppercase tracking-widest hidden md:inline">✦ Technical Arsenal</span>
          <span className="font-label-sm text-label-sm text-primary uppercase inline md:hidden">Technical Arsenal</span>
        </div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg hidden md:block">Core Competencies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={skill.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card md:glass-panel p-6 md:p-8 rounded-[24px] flex flex-col h-full group hover:bg-white/[0.05] transition-colors duration-500"
          >
            <span className="font-label-sm text-label-sm text-on-surface-variant mb-6 hidden md:block">/{skill.number}</span>
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
