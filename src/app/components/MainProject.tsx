import React, { memo } from "react";
import { motion } from "motion/react";
import { ExternalLink, Database, Cloud, ShieldCheck } from "lucide-react";

export const MainProject = memo(() => {
  return (
    <section
      id="proyectos"
      className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-12"
      style={{ background: "var(--bg)" }}
    >
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider" style={{ color: "var(--signal-ok)" }}>
          Proyecto principal · Encargo freelance real (Sept 2025 – Actualidad)
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: "var(--text)" }}
        >
          Sistema de Gestión — Talleres Oja
        </motion.h2>
        <p className="mt-3 text-base" style={{ color: "var(--text-muted)" }}>
          Plataforma full-stack para la digitalización de un negocio real, con la seguridad de la infraestructura tratada como requisito, no como añadido.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-lg border"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="aspect-video overflow-hidden" style={{ background: "var(--bg)" }}>
            <img
              src="/images/TalleresOja.png"
              alt="Sistema de Gestión Talleres Oja"
              loading="lazy"
              decoding="async"
              width={800}
              height={450}
              style={{ objectPosition: "5% 40%" }}
              className="h-full w-full object-cover opacity-90"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5"
        >
          <div
            className="flex flex-col gap-2 rounded-lg border p-5"
            style={{ borderColor: "var(--line)", background: "var(--surface)" }}
          >
            <div className="flex items-center gap-2 font-medium" style={{ color: "var(--text)" }}>
              <Database className="h-4 w-4" style={{ color: "var(--text-muted)" }} />
              Backend
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Flask + PostgreSQL, arquitectura MVC con autenticación por roles y patrón Outbox para notificaciones resilientes.
            </p>
          </div>

          <div
            className="flex flex-col gap-2 rounded-lg border p-5"
            style={{ borderColor: "var(--line)", background: "var(--surface)" }}
          >
            <div className="flex items-center gap-2 font-medium" style={{ color: "var(--text)" }}>
              <Cloud className="h-4 w-4" style={{ color: "var(--text-muted)" }} />
              Automatización
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              n8n orquesta flujos de notificación en tiempo real vía webhooks autenticados.
            </p>
          </div>

          <div
            className="flex flex-col gap-2 rounded-lg border p-5"
            style={{ borderColor: "var(--line)", background: "var(--surface)" }}
          >
            <div className="flex items-center gap-2 font-medium" style={{ color: "var(--text)" }}>
              <ShieldCheck className="h-4 w-4" style={{ color: "var(--signal-warn)" }} />
              Infraestructura y seguridad
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              VPS propio con Docker y Traefik como proxy inverso, endurecido con UFW, Fail2Ban y Snort IDS/IPS.
              Auditoría manual completa contra el OWASP Top 10. El hardening del servidor sigue en marcha, documentado
              en la ficha del proyecto.
            </p>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <a
              href="/templates/talleresoja-portfolio.html"
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium"
              style={{ borderColor: "var(--line)", color: "var(--text)" }}
            >
              <ExternalLink className="h-4 w-4" />
              Ver ficha completa
            </a>
            <a
              href="/templates/talleresoja-portfolio.html#hardening"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--signal-warn)" }}
            >
              Ver checklist de hardening →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

MainProject.displayName = "MainProject";
