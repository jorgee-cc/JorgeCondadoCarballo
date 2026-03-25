import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Zap, MonitorPlay, Cloud, Activity } from "lucide-react";

export const MainProject = () => {
  return (
    <section id="proyectos" className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:px-12">
      <div className="mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-4xl font-extrabold uppercase tracking-tight text-transparent sm:text-6xl drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]"
        >
          El Prototipo
        </motion.h2>
        <p className="mt-4 text-xl font-medium text-zinc-400">
          La Velada VI Showcase
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="group relative"
        >
          {/* Neon border glow effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-2 shadow-2xl">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
              {/* Image from unsplash for visual appeal */}
              <img
                src="/LaVeladaVI_preview.png"
                alt="Prototipo Velada VI Preview"
                className="h-full w-full object-cover opacity-80 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              
              {/* Overlay link */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href="https://prototipo-velada-vi-jorge-condado-c.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-transform hover:scale-105"
                >
                  <MonitorPlay className="h-5 w-5" />
                  Ver Demo en Vivo
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-zinc-300"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/50 backdrop-blur-sm">
              <Zap className="h-6 w-6" />
            </span>
            <h3 className="text-3xl font-bold text-white">Rendimiento Extremo</h3>
          </div>
          
          <p className="text-lg text-zinc-400">
            Diseñado para aguantar tráfico masivo y ofrecer una experiencia fluida. 
            No es solo frontend, es una arquitectura pensada para eventos virales.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mt-4">
            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-purple-500/50 hover:bg-zinc-800/80">
              <div className="flex items-center gap-3 font-semibold text-white">
                <Activity className="h-5 w-5 text-cyan-400" />
                Animaciones 60 FPS
              </div>
              <p className="text-sm text-zinc-500">Optimizadas con aceleración por hardware (GPU) para transiciones sin caídas de frames.</p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-purple-500/50 hover:bg-zinc-800/80">
              <div className="flex items-center gap-3 font-semibold text-white">
                <Cloud className="h-5 w-5 text-fuchsia-400" />
                CI/CD + CDN Edge
              </div>
              <p className="text-sm text-zinc-500">Despliegues continuos automatizados y distribución global para latencia mínima.</p>
            </div>
            
            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-purple-500/50 hover:bg-zinc-800/80 sm:col-span-2">
              <div className="flex items-center gap-3 font-semibold text-white">
                <MonitorPlay className="h-5 w-5 text-purple-400" />
                Stack Moderno
              </div>
              <p className="text-sm text-zinc-500">Construido con React, Tailwind CSS y Framer Motion. Código modular, mantenible y escalable pensado para componentes de streaming y show en directo.</p>
            </div>
          </div>
          
          <div className="mt-4">
            <a
              href="https://github.com/jorgee-cc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 font-semibold transition-colors hover:text-purple-300"
            >
              <ExternalLink className="h-5 w-5" />
              Explorar el código en GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
