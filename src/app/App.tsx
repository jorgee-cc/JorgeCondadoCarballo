import React, { useEffect, useRef, Suspense, lazy } from "react";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { Hero } from "./components/Hero";

// Lazy loading de componentes pesados fuera del viewport inicial
const MainProject = lazy(() => import("./components/MainProject").then(m => ({ default: m.MainProject })));
const OtherProjects = lazy(() => import("./components/OtherProjects").then(m => ({ default: m.OtherProjects })));
const TechStack = lazy(() => import("./components/TechStack").then(m => ({ default: m.TechStack })));
const ExperienceEducation = lazy(() => import("./components/ExperienceEducation").then(m => ({ default: m.ExperienceEducation })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth cursor glow effect optimizado con requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      
      animationFrameId = requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty("--x", `${e.clientX}px`);
          containerRef.current.style.setProperty("--y", `${e.clientY}px`);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black font-sans text-zinc-300 antialiased selection:bg-purple-500/30 selection:text-white"
    >
      <style>{`
        :root {
          --x: 50vw;
          --y: 50vh;
        }
        .pointer-glow::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: radial-gradient(
            600px circle at var(--x) var(--y),
            rgba(168, 85, 247, 0.05),
            transparent 40%
          );
          pointer-events: none;
          z-index: 10;
        }
      `}</style>
      
      <div className="pointer-glow" />

      {/* Global Background Particles & Gradients */}
      <BackgroundEffects />

      {/* Content Sections */}
      <main className="relative flex flex-col items-center w-full">
        <Hero />
        {/* Usamos Suspense para manejar la carga de los componentes diferidos */}
        <Suspense fallback={<div className="h-screen w-full" />}>
          <MainProject />
          <OtherProjects />
          <TechStack />
          <ExperienceEducation />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}