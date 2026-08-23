/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
      <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {/* Glow Overlay */}
      <div className="glow-overlay"></div>

      {/* Dot Grid Layer for Desktop */}
      <div className="fixed inset-0 z-0 pointer-events-none dot-grid opacity-30 hidden md:block"></div>

      <Navbar />

      {/* 
        FULL BLEED MARGINS:
        - Removed all 'px' (horizontal padding) and 'pt' (top padding).
        - Removed 'max-w' constraints so it spans 100% of the monitor width.
      */}
      <main className="relative z-10 w-full pb-32 md:pb-20 flex flex-col gap-16 md:gap-section-gap">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </ReactLenis>
    </GlobalProvider >
  );
}