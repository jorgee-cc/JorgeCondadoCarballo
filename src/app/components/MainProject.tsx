import React, { memo } from "react";
import { motion } from "motion/react";
import { ExternalLink, Database, Cloud, Cog, Lock } from "lucide-react";

export const MainProject = memo(() => {
  return (
    <section id="proyectos" className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:px-12">
      <div className="mb-6 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-blue-400/80">
          Caso de Estudio Principal
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-extrabold uppercase tracking-tight text-transparent sm:text-6xl drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
        >
          Sistema de Gestión - Talleres Oja
        </motion.h2>
        <p className="mt-4 text-xl font-medium text-zinc-400">
          Plataforma full-stack para la digitalización integral de un negocio real
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="group relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0b1a31] p-2 shadow-2xl">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-[#07111f]">
              <img
                src="/images/TalleresOja.png"
                alt="Sistema de Gestión Talleres Oja"
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

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-zinc-300"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/50 backdrop-blur-sm">
              <Database className="h-6 w-6" />
            </span>
            <h3 className="text-3xl font-bold text-white">Arquitectura Robusta y Segura</h3>
          </div>

          <p className="text-lg text-zinc-400">
            Desarrollo end-to-end de una plataforma web diseñada para optimizar los procesos de un taller mecánico. Enfocada en la seguridad, la estabilidad del despliegue y la automatización de tareas cotidianas.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mt-4">
            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-blue-500/50 hover:bg-zinc-800/80">
              <div className="flex items-center gap-3 font-semibold text-white">
                <Database className="h-5 w-5 text-blue-400" />
                Backend
              </div>
              <p className="text-sm text-zinc-500">
                Construido con Flask y PostgreSQL para una gestión de datos eficiente, rápida y segura.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-blue-500/50 hover:bg-zinc-800/80">
              <div className="flex items-center gap-3 font-semibold text-white">
                <Cloud className="h-5 w-5 text-cyan-400" />
                Automatización
              </div>
              <p className="text-sm text-zinc-500">
                Integración con n8n para flujos de trabajo automatizados y notificaciones en tiempo real.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-md transition-colors hover:border-blue-500/50 hover:bg-zinc-800/80 sm:col-span-2">
              <div className="flex items-center gap-3 font-semibold text-white">
                <Lock className="h-5 w-5 text-emerald-400" />
                Infraestructura y Seguridad
              </div>
              <p className="text-sm text-zinc-500">
                Desplegado en un VPS propio utilizando Docker y Traefik como proxy inverso. Seguridad auditada siguiendo los estándares de OWASP Top 10.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            <a
              href="/templates/talleresoja-portfolio.html"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition-colors hover:border-blue-400/70 hover:bg-blue-500/20 hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              Ver detalles
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

MainProject.displayName = "MainProject";
