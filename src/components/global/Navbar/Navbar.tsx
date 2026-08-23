import React from 'react';
import clsx from 'clsx';
import { useGlobalContext } from '@/src/context/GlobalContext';
import { Button } from '../Button/Button';
// import styles form './Navbar.module.scss';

export const Navbar: React.FC = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobalContext();

  return (
    <>
      {/* Desktop / Tablet Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center items-center w-full px-4 mt-6">
        <div className="glass-panel flex items-center gap-8 px-6 py-3 rounded-full shadow-2xl">
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

      {/* Mobile Navbar */}
      <header className="flex md:hidden justify-between items-center px-6 py-6 w-full z-50 fixed top-0 bg-transparent">
        <button 
          className="text-primary hover:text-primary/80 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
        <span className="font-display-xl text-[32px] tracking-tighter text-primary leading-none">Rohan</span>
        <button className="text-primary hover:text-primary/80 transition-colors">
          <span className="material-symbols-outlined">terminal</span>
        </button>
      </header>

      {/* Bottom Mobile Navigation Shell */}
      <nav className="fixed bottom-6 left-0 right-0 mx-auto flex md:hidden justify-around items-center px-4 py-2 z-50 max-w-md w-[90%] rounded-full backdrop-blur-md bg-white/5 border border-white/10 shadow-xl">
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
