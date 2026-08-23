import React from 'react';
import { motion } from 'framer-motion';
import './Experience.module.scss';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-32 w-full max-w-container-max mx-auto px-6 md:px-margin-desktop mb-24 md:mb-0">

      {/* 
        FIXED ALIGNMENT: 
        - items-start & text-left for Mobile.
        - md:items-center & md:text-center for Tablet/Desktop.
      */}
      <div className="flex flex-col items-start md:items-center mb-16 text-left md:text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-outline-variant bg-surface-container mb-4">
          <span className="material-symbols-outlined text-[14px]">work</span>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">✦ Career</span>
        </div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg">Professional Journey</h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center w-full relative"
          >
            {/* Left Side: Date (Desktop Only) */}
            <div className="w-full md:w-5/12 hidden md:flex justify-end pr-8">
              <span className="font-label-sm text-label-sm text-on-surface-variant border border-outline-variant px-3 py-1.5 rounded bg-surface-container h-fit">
                Jan 2026 - June 2026
              </span>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[#050505] transform -translate-x-1/2 hidden md:block z-10"></div>

            {/* Right Side: Experience Card */}
            <div className="w-full md:w-5/12">
              <div className="glass-panel p-8 rounded-[24px]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-xl mb-1">Associate Software Engineer Intern</h3>
                    <p className="font-body-md text-body-md text-primary-fixed-dim">Coditas Solutions LLP</p>
                  </div>
                  {/* Date inside card (Mobile Only) */}
                  <span className="md:hidden font-label-sm text-label-sm text-on-surface-variant border border-outline-variant px-2 py-1 rounded text-right ml-4">
                    Jan 2026 - June 2026
                  </span>
                </div>
                <ul className="font-body-md text-body-md text-on-surface-variant space-y-2 list-disc list-inside">
                  <li>Developed and integrated responsive React UI components.</li>
                  <li>Collaborated with product teams to deliver features.</li>
                  <li>Optimized component state management to reduce redundant API calls.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};