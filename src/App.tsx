import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import { ReactLenis } from 'lenis/react';
import { Navbar } from './components/global/Navbar/Navbar';
import { Hero } from './components/sections/Hero/Hero';
import { Skills } from './components/sections/Skills/Skills';
import { Experience } from './components/sections/Experience/Experience';
import { Projects } from './components/sections/Projects/Projects';
import { Footer } from './components/sections/Footer/Footer';

export default function App() {
  return (
    <GlobalProvider>
      <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 1, smoothWheel: true }}>
        
        {/* 
          THE GLOBAL OVERFLOW FIX:
          This wrapper acts as a strict boundary wall. It prevents ANY off-screen 
          elements from stretching the mobile screen to the right!
        */}
        <div className="relative w-full max-w-full overflow-x-hidden flex flex-col min-h-screen">
          
          {/* Glow Overlay */}
          <div className="glow-overlay"></div>

          {/* Dot Grid Layer for Desktop */}
          <div className="fixed inset-0 z-0 pointer-events-none dot-grid opacity-30 hidden md:block"></div>

          <Navbar />

          <main className="relative z-10 w-full flex-grow pb-32 md:pb-20 flex flex-col gap-16 md:gap-section-gap">
            <Hero />
            <Skills />
            <Experience />
            <Projects />
          </main>

          <Footer />
          
        </div>
      </ReactLenis>
    </GlobalProvider >
  );
}