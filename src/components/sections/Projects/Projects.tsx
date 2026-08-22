import React from 'react';
import { motion } from 'framer-motion';
import { ProjectItem } from './Projects.types';
import './Projects.module.scss';

const projectsData: ProjectItem[] = [
  {
    id: 'p1',
    category: 'Dashboard',
    title: 'Enterprise Analytics',
    description: 'A comprehensive data visualization suite built with React and D3.js for large-scale enterprise data.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApIqW--jmoKkANTdIDO0YA7TN2-wNdpCPYfgnETANrqigf-csQe6yL_ZI5xF6zpStt4Sc8hzi9mD_92a-vVlXSD7yDEDstehp9sAcXm2PaA4GnLDI1HIhK8t3CYsdM3Zr4yphybUXurNtzbn8g8RgA5RwE4yA32nNOpZuE_Gt5gr1qEUUksqfUdjvFdzST51-Tusm5zhDRnw7vrv4gbqHcjzLfmuyaqj1ZnYnHoIMOkFutrTAw5YxH',
    link: '#'
  },
  {
    id: 'p2',
    category: 'AI / ML',
    title: 'Nexus AI Platform',
    description: 'Frontend architecture for a machine learning model training and deployment interface.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsZGGCTqytjoksorSjo2bFyo8Iyn_88BqZaajXVmdZ25EpwXybRS8MuJ1AqS8le_PJdzyCJQVrVC_xds_51QjC3r2m8NJBTqAf0epVCzbkK5-HJ30St3i35Bn_EQ8h0gRwxLJP8W94_e-3sHOMO9Shzt5EqvUYziicwZQEeveqo_xbNvjY635Cto1j-I_dkxNcbZfOjCZ5zs910kD5msm65aHJbZyipJIVfFMTgfKCp7butaRBrDwE',
    link: '#'
  },
  {
    id: 'p3',
    category: 'SaaS',
    title: 'Agile Flow Tool',
    description: 'A real-time collaborative project management tool utilizing WebSockets and optimistic UI updates.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqy6_KO4Mm3uDR1mSJr97wEQsIrS6LgaeItkax0jfvbEqJ3K5cAP1vzz8U2YhJKHPQZRnx_WtKdehQ2T6nvQRiujcm9O6cigUjq8RmFy-50XcacLrnwftfVeMAS9fJ2GGt-XrsOo4oin18uM8Rp5bbNfvWu9Y79HY8bFx8U4cgXKu7OZdEXo2crSVknwa20rQezzjaEB3hjrTZptTrmLO5iZLd_Xrk_auTBPqZ0ZGo7DLO8jlPSA3s',
    link: '#'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-32 w-full max-w-container-max mx-auto md:px-margin-desktop mb-24 md:mb-0">
      <div className="flex flex-col items-center mb-8 md:mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full md:rounded border border-outline-variant bg-surface-container md:mb-4 glass-card md:glass-none self-start md:self-center mb-6 hidden md:inline-flex">
          <span className="material-symbols-outlined text-[14px]">grid_view</span>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">✦ Portfolio</span>
        </div>
        <div className="flex justify-between items-end border-b border-white/10 pb-4 w-full md:w-auto md:border-none md:pb-0">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg hidden md:block">Selected Works</h2>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background md:hidden"><span className="italic font-display-xl text-[36px]">Selected</span> Work</h2>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase md:hidden">03</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-gutter">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-[24px] overflow-hidden glass-card md:glass-panel aspect-[4/3] md:aspect-[4/5] flex flex-col justify-end p-6"
          >
            <div 
              className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105 opacity-80 md:opacity-40 mix-blend-screen md:mix-blend-normal bg-cover bg-center"
              style={{ backgroundImage: `url('${project.imageUrl}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
            
            <div className="relative z-20 flex flex-col h-full justify-between md:justify-end">
              <div className="flex gap-2 mb-4 md:mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-label-sm text-[10px] text-white">
                  {project.category}
                </span>
              </div>
              <div>
                <h3 className="font-display-xl text-xl md:text-headline-md mb-2">{project.title}</h3>
                <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-4 md:mb-6 line-clamp-2">
                  {project.description}
                </p>
                <a href={project.link} className="hidden md:inline-flex items-center gap-2 font-label-sm text-label-sm text-primary hover:text-white transition-colors">
                  View Case Study <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
                <div className="flex md:hidden justify-end">
                  <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-primary">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
