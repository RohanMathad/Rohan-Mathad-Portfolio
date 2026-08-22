/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import { Navbar } from './components/global/Navbar/Navbar';
import { Hero } from './components/sections/Hero/Hero';
import { Skills } from './components/sections/Skills/Skills';
import { Experience } from './components/sections/Experience/Experience';
import { Projects } from './components/sections/Projects/Projects';
import { Footer } from './components/sections/Footer/Footer';

export default function App() {
  return (
    <GlobalProvider>
      {/* Glow Overlay */}
      <div className="glow-overlay"></div>
      
      {/* Dot Grid Layer for Desktop */}
      <div className="fixed inset-0 z-0 pointer-events-none dot-grid opacity-30 hidden md:block"></div>

      <Navbar />
      
      <main className="relative z-10 w-full md:max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-12 md:pt-40 pb-32 md:pb-20 flex flex-col gap-16 md:gap-section-gap">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </GlobalProvider>
  );
}

