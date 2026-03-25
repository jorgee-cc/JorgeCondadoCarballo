import React, { useEffect, useRef } from "react";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { Hero } from "./components/Hero";
import { MainProject } from "./components/MainProject";
import { OtherProjects } from "./components/OtherProjects";
import { TechStack } from "./components/TechStack";
import { ExperienceEducation } from "./components/ExperienceEducation";
import { Contact } from "./components/Contact";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth cursor glow effect following mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        containerRef.current.style.setProperty("--x", `${clientX}px`);
        containerRef.current.style.setProperty("--y", `${clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
        <MainProject />
        <OtherProjects />
        <TechStack />
        <ExperienceEducation />
        <Contact />
      </main>
    </div>
  );
}
