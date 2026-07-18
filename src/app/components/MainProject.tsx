import React, { memo } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, AudioLines, MousePointerClick, Palette, ShieldCheck } from "lucide-react";

export const MainProject = memo(() => {
  return (
    <section id="proyectos" className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:px-12">
      <div className="mb-6 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-red-400/80">
          Expediente D.O.D.C. · Sección 01
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text text-4xl font-extrabold uppercase tracking-tight text-transparent sm:text-6xl drop-shadow-[0_0_10px_rgba(217,22,22,0.3)]"
        >
          Spider-Man: Brand New Day
        </motion.h2>
        <p className="mt-4 text-xl font-medium text-zinc-400">
          Una landing pensada como caso de investigación, no como página de fans
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
          {/* Neon border glow effect — recoloreado a la paleta real del proyecto */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-700 via-red-500 to-blue-600 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-2 shadow-2xl">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
              {/* Project presentation image */}
              <img
                src="/images/Spiderman_BrandNewDay.png"
                alt="Spider-Man: Brand New Day — puerta de acceso al expediente digital"
                loading="lazy"
                decoding="async"
                width={800}
                height={450}
                className="h-full w-full object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
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
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-vigilante-red/20 text-red-400 ring-1 ring-vigilante-red/50 backdrop-blur-sm">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <h3 className="text-3xl font-bold text-white">Landing narrativa de alto rendimiento</h3>
          </div>

          <p className="text-lg text-zinc-400">
            Diseñé y construí una experiencia web narrativa alrededor de Spider-Man: Brand New Day, con
            sistema de diseño propio, audio ambiente real vía Web Audio API y animaciones ligadas al
            scroll con Framer Motion — desde una puerta de acceso "cifrada" hasta un análisis del traje
            con overlay tipo HUD y un cierre en efecto "fly-through".
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mt-4">
            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-vigilante-red/50 hover:bg-zinc-800/80">
              <div className="flex items-center gap-3 font-semibold text-white">
                <MousePointerClick className="h-5 w-5 text-red-400" />
                Animación ligada al scroll
              </div>
              <p className="text-sm text-zinc-500">
                Framer Motion avanzado (useScroll, useTransform, useMotionTemplate) para zoom del traje,
                revelado de titulares y un cierre tipo "fly-through", con soporte de prefers-reduced-motion.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-vigilante-red/50 hover:bg-zinc-800/80">
              <div className="flex items-center gap-3 font-semibold text-white">
                <AudioLines className="h-5 w-5 text-blue-400" />
                Audio real, no de adorno
              </div>
              <p className="text-sm text-zinc-500">
                Web Audio API (AudioContext, buffers decodificados) para ambiente de lluvia y una
                secuencia de "desencriptado" antes de revelar el contenido.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-vigilante-red/50 hover:bg-zinc-800/80 sm:col-span-2">
              <div className="flex items-center gap-3 font-semibold text-white">
                <Palette className="h-5 w-5 text-amber-400" />
                Sistema de diseño propio
              </div>
              <p className="text-sm text-zinc-500">
                Paleta, tipografía (Oswald/Bebas Neue + Space Grotesk), escala de espaciado y curva de
                easing documentadas en el propio proyecto — no un theme por defecto. React 18 + TypeScript + Vite.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            <a
              href="https://spiderman-brand-new-day-gamma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-vigilante-red/40 bg-vigilante-red/10 px-4 py-2 text-sm font-semibold text-red-300 transition-colors hover:border-red-400/70 hover:bg-vigilante-red/20 hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              Ver demo en vivo
            </a>
            <a
              href="https://github.com/jorgee-cc/Spiderman_BrandNewDay"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 font-semibold transition-colors hover:text-white"
            >
              <Github className="h-4 w-4" />
              Ver código en GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

MainProject.displayName = "MainProject";
