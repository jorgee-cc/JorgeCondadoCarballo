import React, { memo } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";

// ⚡ PERF: Objetos de transición fuera del componente
// Evitan crear nuevas referencias en cada render
const TRANSITIONS = {
  avatar:    { delay: 0.1, duration: 0.8 },
  badge:     { delay: 0.2, duration: 0.8 },
  container: { duration: 0.8, ease: "easeOut" as const },
  scroll:    { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
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
          className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
        >
          <ImageWithFallback
            src="/1726564320490.jpeg"
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
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
          </span>
          ESTUDIANTE INGENIERIA INFORMATICA UC3M
        </motion.div>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <span className="relative mb-2 block text-3xl font-bold sm:text-4xl lg:text-5xl drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] gradient-text-container">
            <span className="bg-[linear-gradient(90deg,#e2e8f0,#ffffff,#94a3b8,#475569,#ffffff,#e2e8f0,#ffffff,#94a3b8)] bg-clip-text text-transparent">
              Jorge Condado
            </span>
          </span>
        </h1>

        <div className="mx-auto mb-10 max-w-2xl rounded-xl border-l-4 border-purple-500/60 bg-zinc-900/50 p-6 text-lg font-medium text-zinc-300 sm:text-2xl">
          Especializado en la creación de aplicaciones web escalables de principio a fin. Mi enfoque combina un frontend moderno, fluido y accesible con sistemas backend robustos, automatizados y desplegados en infraestructura propia. Construyo productos digitales que no solo destacan visualmente, sino que están diseñados para soportar tráfico masivo y entornos de producción exigentes.
        </div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={TRANSITIONS.scroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ChevronDown className="h-8 w-8 opacity-50" />
      </motion.div>
    </section>
  );
});

Hero.displayName = "Hero";