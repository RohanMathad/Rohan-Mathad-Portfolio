# ✦ Rohan Mathad | Technical Luxury Portfolio

A high-performance, WebGL-integrated personal portfolio engineered for flawless 60 FPS mobile experiences. Built with a focus on "technical luxury," this project blends high-end 3D graphics, hardware-accelerated glassmorphism, and deep architectural optimizations to deliver a premium user experience across all devices.

## 🚀 Live Demo

https://rohan-mathad-portfolio.vercel.app/

## ✨ Key Features & Engineering Highlights

* **Dark Chrome WebGL Sphere:** A highly optimized 3D hero section utilizing `meshStandardMaterial` for single-pass GPU rendering, achieving studio-quality reflections without the heavy refraction overhead of transmission materials.
* **Zero-CPU Render Throttling:** Implements an aggressive Intersection Observer kill-switch that completely halts the Three.js `useFrame` loop when scrolled out of view, instantly freeing the main thread for smooth 2D scrolling.
* **Cinematic Project Coverflow:** A custom 3:4 aspect ratio slider powered by Framer Motion, utilizing CSS `will-change: transform` and `translateZ(0)` to force hardware-accelerated GPU rasterization on mobile devices.
* **Predictive Animation Triggers:** Combines `amount: 0` and off-screen margins to pre-calculate heavy Framer Motion DOM layout shifts before they enter the viewport, eliminating scroll stutter.
* **Dynamic DPR Scaling:** Caps the Device Pixel Ratio (DPR) to `[1, 1.5]` to prevent high-density mobile retina displays from thermally throttling the mobile GPU during WebGL rendering.

## 🛠️ Tech Stack

* **Core:** React 18, TypeScript, Vite
* **3D / WebGL:** Three.js, React Three Fiber, React Three Drei
* **Styling:** Tailwind CSS, SCSS Modules
* **Animation:** Framer Motion
* **Deployment:** Vercel

## 💻 Getting Started

Follow these steps to run the project locally.

1. **Clone the repository**
```bash
git clone https://github.com/RohanMathad/Rohan-Mathad-Portfolio.git
cd Rohan-Mathad-Portfolio

```


2. **Install dependencies**
```bash
npm install

```


3. **Run the development server**
```bash
npm run dev

```


4. **Build for production**
```bash
npm run build

```



## 🧠 About the Architecture

This portfolio was explicitly engineered to solve the classic "WebGL mobile bottleneck." By transitioning away from heavy CPU-based vertex displacement and multi-pass GPU transmission shaders, the architecture relies on native PBR reflections and strict main-thread management.

CSS blurs (`backdrop-filter`) and complex layout animations are strictly hardware-accelerated, ensuring that the visual weight of the "technical luxury" theme does not compromise raw performance.

## 👨‍💻 Author

**Rohan Mathad**
*Frontend & Full-Stack Developer* | *B.E. Computer Engineering*

Passionate about scalable web architecture, high-performance computing, and bridging the gap between deep technical implementation and refined UI/UX design.
