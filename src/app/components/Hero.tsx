import React from "react";
import { motion } from "motion/react";
import { ChevronDown, ExternalLink, Play } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";

export const Hero = () => {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
        >
          <ImageWithFallback
            src="/1726564320490.jpeg"
            alt="Jorge Condado"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
          </span>
          DESARROLLADOR FULL-STACK / FRONTEND ARCHITECT
        </motion.div>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <motion.span 
            animate={{ backgroundPosition: ["200% auto", "0% auto"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="mb-2 block bg-[linear-gradient(90deg,#e2e8f0,#ffffff,#94a3b8,#475569,#ffffff,#e2e8f0)] bg-[length:200%_auto] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]"
          >
            Jorge Condado
          </motion.span>
          <motion.span 
            animate={{ backgroundPosition: ["200% auto", "0% auto"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="inline-block bg-[linear-gradient(90deg,#e2e8f0,#ffffff,#94a3b8,#475569,#ffffff,#e2e8f0)] bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          >
            RENDIMIENTO EXTREMO
          </motion.span>
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
            href="https://prototipo-velada-vi-jorge-condad-git-cc4870-jorgee-ccs-projects.vercel.app/"
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
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ChevronDown className="h-8 w-8 opacity-50" />
      </motion.div>
    </section>
  );
};
