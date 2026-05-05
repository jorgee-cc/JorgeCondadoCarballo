// App.tsx — VERSIÓN OPTIMIZADA
import React, { useEffect, useRef, Suspense, lazy, memo } from "react";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

// ⚡ PERF: Lazy loading ya estaba implementado — se mantiene
const MainProject       = lazy(() => import("./components/MainProject").then(m => ({ default: m.MainProject })));
const OtherProjects     = lazy(() => import("./components/OtherProjects").then(m => ({ default: m.OtherProjects })));
const TechStack         = lazy(() => import("./components/TechStack").then(m => ({ default: m.TechStack })));
const ExperienceEducation = lazy(() => import("./components/ExperienceEducation").then(m => ({ default: m.ExperienceEducation })));
const Contact           = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));

// ⚡ PERF: Skeleton de sección optimizado
// Evita layout shift (CLS) durante la carga lazy
// Usa content-visibility:auto para no renderizar fuera del viewport
const SectionSkeleton = ({ height = "100vh" }: { height?: string }) => (
  <div
    className="w-full"
    style={{
      minHeight: height,
      contentVisibility: "auto",
      containIntrinsicSize: `0 ${height}`,
    }}
  />
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  // ⚡ PERF: Guardamos el ID del RAF para cancelarlo en cleanup
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Cancelar RAF anterior si aún no ejecutó
      // Evita acumulación de callbacks en cola
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(() => {
        if (containerRef.current) {
          // ⚡ PERF: Batch de dos setProperty en un solo RAF
          // Usa CSS custom properties — cero layout, cero paint, solo composite
          containerRef.current.style.setProperty("--x", `${e.clientX}px`);
          containerRef.current.style.setProperty("--y", `${e.clientY}px`);
        }
      });
    };

    // ⚡ PERF: passive:true ya estaba — se mantiene
    // Permite al browser optimizar el scroll sin esperar al handler
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // ⚡ PERF: Cancelar RAF pendiente en cleanup
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black font-sans text-zinc-300 antialiased selection:bg-purple-500/30 selection:text-white"
      /*
       * ⚡ PERF: El efecto pointer-glow se mueve a CSS (ver theme.css)
       * Ya no hay <style> inline → cero overhead de reconciliación React
       * El pseudo-elemento ::before con CSS custom properties
       * opera 100% en compositor sin JS
       */
    >
      {/* El div .pointer-glow aplica el pseudo-elemento via CSS */}
      <div className="pointer-glow" />

      <BackgroundEffects />

      <Header />

      <main className="relative flex flex-col items-center w-full">
        <Hero />
        <Suspense fallback={<SectionSkeleton height="100vh" />}>
          <MainProject />
        </Suspense>
        <Suspense fallback={<SectionSkeleton height="80vh" />}>
          <OtherProjects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton height="60vh" />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<SectionSkeleton height="60vh" />}>
          <ExperienceEducation />
        </Suspense>
        <Suspense fallback={<SectionSkeleton height="40vh" />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}