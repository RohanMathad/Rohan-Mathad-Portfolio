import React from 'react';
import { Button } from '../Button/Button';
// Removed useGlobalContext since we gutted the mobile menu buttons

export const Navbar: React.FC = () => {
  return (
    <>
      {/* =========================================
          DESKTOP NAVBAR (UNTOUCHED)
          ========================================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center items-center w-full px-4 mt-6 pointer-events-none">
        <div className="glass-panel flex items-center gap-8 px-6 py-3 rounded-full shadow-2xl pointer-events-auto">
          <a href="#" className="font-display-xl text-headline-md italic text-primary tracking-tighter">
            Frontend Dev
          </a>
          <div className="flex items-center gap-6">
            <a href="#skills" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300">
              Skills
            </a>
            <a href="#experience" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300">
              Experience
            </a>
            <a href="#projects" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300">
              Projects
            </a>
          </div>
          <Button variant="primary" className="!py-2.5"> <a href="#contact">Let's Chat</a> </Button>
        </div>
      </nav>

      {/* =========================================
          MOBILE NAVBAR (PERFECTLY CENTERED, NO ICONS)
          ========================================= */}
      <header className="flex md:hidden justify-center items-center py-5 w-full z-50 fixed top-0 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-md">
        <span className="font-display-xl text-[32px] tracking-tighter text-primary leading-none">
          Frontend Dev
        </span>
      </header>

      {/* =========================================
          BOTTOM MOBILE CAPSULE (Z-INDEX 999)
          ========================================= */}
      <nav className="fixed bottom-6 left-0 right-0 mx-auto flex md:hidden justify-around items-center px-4 py-2 z-[999] max-w-md w-[90%] rounded-full backdrop-blur-md bg-white/5 border border-white/10 shadow-xl">
        <a href="#" className="bg-primary text-on-primary rounded-full p-3 scale-90 duration-300 flex flex-col items-center">
          <span className="material-symbols-outlined">home_app_logo</span>
        </a>
        <a href="#skills" className="text-on-surface-variant p-3 hover:bg-white/10 rounded-full transition-all flex flex-col items-center">
          <span className="material-symbols-outlined">code</span>
        </a>
        <a href="#projects" className="text-on-surface-variant p-3 hover:bg-white/10 rounded-full transition-all flex flex-col items-center">
          <span className="material-symbols-outlined">work</span>
        </a>
        <a href="#contact" className="text-on-surface-variant p-3 hover:bg-white/10 rounded-full transition-all flex flex-col items-center">
          <span className="material-symbols-outlined">mail</span>
        </a>
      </nav>
    </>
  );
};