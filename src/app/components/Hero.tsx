import React, { memo } from "react";
import { motion } from "motion/react";
import { ChevronDown, ExternalLink, Play } from "lucide-react";
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
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center sm:px-12">
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
          DESARROLLADOR FULL-STACK / FRONTEND ARCHITECT
        </motion.div>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">

          {/* ⚡ PERF: Efecto marquee con CSS class en vez de inline animate prop
              transform: translateX() = GPU compositor thread = 0 JS overhead */}
          <span className="relative mb-2 block overflow-hidden inline-block text-3xl font-bold sm:text-4xl lg:text-5xl drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] gradient-text-container">
            <span className="invisible"> Jorge Condado </span>
            <span
              className="animate-name-marquee absolute top-0 left-0 w-[200%] h-full bg-[linear-gradient(90deg,#e2e8f0,#ffffff,#94a3b8,#475569,#ffffff,#e2e8f0,#ffffff,#94a3b8)] bg-clip-text text-transparent flex"
            >
              <span className="w-1/2"> Jorge Condado </span>
              <span className="w-1/2"> Jorge Condado </span>
            </span>
          </span>

          {/* ⚡ PERF CRÍTICO: backgroundPosition movido a CSS animation
              Antes: Framer Motion animaba backgroundPosition vía JS → repaint/frame
              Ahora: CSS @keyframes → browser gestiona batching sin bloquear JS thread */}
          <span
            className="animate-gradient-shift inline-block bg-[linear-gradient(90deg,#e2e8f0,#ffffff,#94a3b8,#475569,#ffffff,#e2e8f0)] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          >
            RENDIMIENTO EXTREMO
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-zinc-300 sm:text-2xl">
          "He construido un prototipo para La Velada. Ahora quiero construir el definitivo."
        </p>

        <p className="mx-auto mb-12 max-w-xl text-base text-zinc-400 sm:text-lg">
          Frontend de alto rendimiento + backend escalable. Animaciones 60 FPS, sistemas distribuidos, tráfico masivo.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://prototipo-velada-vi-jorge-condado-c.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:bg-zinc-200 sm:w-auto"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            <Play className="h-5 w-5 fill-black" />
            <span>Ver Demo Velada</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#proyectos"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-8 py-4 font-bold text-white transition-all hover:bg-zinc-800 hover:text-white sm:w-auto backdrop-blur-sm"
          >
            <span>Ver proyectos</span>
            <ChevronDown className="h-5 w-5" />
          </motion.a>
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