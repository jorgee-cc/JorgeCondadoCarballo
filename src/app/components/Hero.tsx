import React, { memo } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ui/ImageWithFallback";

// ⚡ PERF: Objetos de transición fuera del componente
// Evitan crear nuevas referencias en cada render
const TRANSITIONS = {
  avatar:    { delay: 0.1, duration: 0.8 },
  badge:     { delay: 0.2, duration: 0.8 },
  container: { duration: 0.8, ease: "easeOut" as const },
};

const INITIAL_STATES = {
  fadeUp:    { opacity: 0, y: 50 },
  scaleIn:   { opacity: 0, scale: 0.5 },
  scaleDown: { opacity: 0, scale: 0.9 },
};

const ANIMATE_IN = { opacity: 1, y: 0, scale: 1 };

// ⚡ PERF: React.memo — este componente no recibe props
// Si el padre (App) re-renderiza, Hero NO se re-renderiza
export const Hero = memo(() => {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center sm:px-12">
      <motion.div
        initial={INITIAL_STATES.fadeUp}
        animate={ANIMATE_IN}
        transition={TRANSITIONS.container}
        className="max-w-4xl"
      >
        {/* Avatar — fetchpriority="high" para mejorar LCP */}
        <motion.div
          initial={INITIAL_STATES.scaleIn}
          animate={ANIMATE_IN}
          transition={TRANSITIONS.avatar}
          className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-[var(--signal-ok)]/40"
        >
          <ImageWithFallback
            src="/images/1726564320490.jpeg"
            alt="Jorge Condado"
            className="h-full w-full object-cover"
            fetchPriority="high"   /* ⚡ LCP: carga prioritaria */
            width={128}
            height={128}
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={INITIAL_STATES.scaleDown}
          animate={ANIMATE_IN}
          transition={TRANSITIONS.badge}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--signal-ok)]/40 bg-[var(--signal-ok)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--signal-ok)] backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--signal-ok)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--signal-ok)]" />
          </span>
          ESTUDIANTE DE ING. INFORMÁTICA · UC3M — CONSTRUYENDO PRODUCTOS REALES
        </motion.div>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-[var(--text)] sm:text-7xl lg:text-8xl">
          <span className="relative mb-2 block text-3xl font-bold text-[var(--text)] sm:text-4xl lg:text-5xl">
            Jorge Condado
          </span>
        </h1>

        <div className="mx-auto mb-10 max-w-2xl rounded-xl border-l-4 border-[var(--signal-warn)] bg-[var(--surface)]/80 p-6 text-lg font-medium text-[var(--text-muted)] sm:text-2xl">
            Estudiante de 4 año de Ingeniería Informática especializado en IA aplicada, algoritmos de búsqueda y ciberseguridad. Construyo desde motores de alto rendimiento en C++ hasta arquitecturas seguras en producción. Código eficiente respaldado por una toma de decisiones forjada bajo presión.
        </div>

      </motion.div>
    </section>
  );
});

Hero.displayName = "Hero";
