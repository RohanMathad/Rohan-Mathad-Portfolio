import React from 'react';
import './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full mx-auto md:max-w-container-max md:px-margin-desktop py-20 flex flex-col items-center relative overflow-hidden bg-surface border-t border-outline-variant md:border-white/5 mt-auto">
      {/* Desktop/Tablet Footer */}
      <div className="hidden md:flex flex-col items-center w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-6">Ready to build something <span className="italic text-primary-fixed-dim">extraordinary?</span></h2>
          <a href="mailto:rahul.demo@example.com" className="font-body-lg text-body-lg text-primary hover:text-white underline underline-offset-8 transition-colors">rahul.demo@example.com</a>
        </div>
        <div className="flex gap-8 mb-16">
          <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-white transition-opacity duration-300">LinkedIn</a>
          <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-white transition-opacity duration-300">GitHub</a>
          <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-white transition-opacity duration-300">Twitter</a>
          <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-white transition-opacity duration-300">Email</a>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="font-label-sm text-label-sm text-on-surface-variant mb-8">© 2025 Rahul. All Rights Reserved</p>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="flex flex-col gap-6 w-full px-6 md:hidden relative z-10">
        <ul className="flex flex-col gap-4">
          <li><a href="#" className="font-body-md text-body-md text-outline hover:text-primary transition-opacity">GITHUB</a></li>
          <li><a href="#" className="font-body-md text-body-md text-outline hover:text-primary transition-opacity">LINKEDIN</a></li>
          <li><a href="#" className="font-body-md text-body-md text-outline hover:text-primary transition-opacity">RESUME</a></li>
        </ul>
        <p className="font-body-md text-sm text-on-surface-variant">© 2025 RAHUL. ENGINEERED WITH PRECISION.</p>
      </div>

      {/* Huge Watermark */}
      <div className="font-display-xl text-[80px] md:text-[160px] uppercase tracking-tighter opacity-5 select-none leading-none absolute bottom-0 md:transform md:translate-y-1/4 left-4 md:left-auto text-on-background pointer-events-none">
        RAHUL
      </div>
    </footer>
  );
};
