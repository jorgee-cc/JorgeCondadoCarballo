import React, { memo } from "react";
import { motion } from "motion/react";
import { ExternalLink, MonitorPlay, Database, Server, Cog, Cloud } from "lucide-react";

export const MainProject = memo(() => {
  return (
    <section id="proyectos" className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:px-12">
      <div className="mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-4xl font-extrabold uppercase tracking-tight text-transparent sm:text-6xl drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]"
        >
          Proyecto Destacado
        </motion.h2>
        <p className="mt-4 text-xl font-medium text-zinc-400">
          Sistema de Gestión - Talleres Oja
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
              {/* Project presentation image */}
              <img
                src="/TalleresOja.png"
                alt="Sistema de Gestión Talleres Oja"
                loading="lazy"
                decoding="async"
                width={800}
                height={450}
                className="h-full w-full object-contain object-center bg-zinc-900 p-2 opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
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
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/50 backdrop-blur-sm">
              <Server className="h-6 w-6" />
            </span>
            <h3 className="text-3xl font-bold text-white">Infraestructura de Producción</h3>
          </div>
          
          <p className="text-lg text-zinc-400">
            Un sistema orientado a operación real, con automatización, seguridad y despliegue estable para entornos de negocio.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mt-4">
            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-purple-500/50 hover:bg-zinc-800/80">
              <div className="flex items-center gap-3 font-semibold text-white">
                <Database className="h-5 w-5 text-cyan-400" />
                Arquitectura Full-Stack
              </div>
              <p className="text-sm text-zinc-500">Plataforma web que digitaliza un taller mecánico. Construido con Python, Flask, y PostgreSQL.</p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-purple-500/50 hover:bg-zinc-800/80">
              <div className="flex items-center gap-3 font-semibold text-white">
                <Cloud className="h-5 w-5 text-fuchsia-400" />
                Automatización & n8n
              </div>
              <p className="text-sm text-zinc-500">Flujos de trabajo automatizados para notificaciones y gestión de estados sin intervención manual.</p>
            </div>
            
            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-purple-500/50 hover:bg-zinc-800/80 sm:col-span-2">
              <div className="flex items-center gap-3 font-semibold text-white">
                <Cog className="h-5 w-5 text-purple-400" />
                Seguridad & Despliegue
              </div>
              <p className="text-sm text-zinc-500">VPS propio en Hetzner, proxy inverso con Traefik, Dockerizado y auditado bajo estándares OWASP Top 10.</p>
            </div>
          </div>
          
          <div className="mt-4">
            <a
              href="/talleresoja-portfolio.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 font-semibold transition-colors hover:text-purple-300"
            >
              <ExternalLink className="h-5 w-5" />
              Explorar en detalle
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

MainProject.displayName = "MainProject";
