import React, { memo } from "react";
import { motion } from "motion/react";
import { Code2, Server, Terminal, Cog, BrainCircuit, ShieldCheck } from "lucide-react";

const stackCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="h-6 w-6" style={{ color: "var(--signal-ok)" }} />,
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion", "Web Audio API"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" style={{ color: "var(--text)" }} />,
    skills: ["Python", "Flask", "SQL", "C", "C++"],
  },
  {
    title: "IA & Optimización",
    icon: <BrainCircuit className="h-6 w-6" style={{ color: "var(--signal-ok)" }} />,
    skills: ["Constraint Satisfaction (CSP)", "Búsqueda A* / Heurísticas", "GLPK", "GNU MathProg", "Programación Lineal Entera"],
  },
  {
    title: "Seguridad & Hardening",
    icon: <ShieldCheck className="h-6 w-6" style={{ color: "var(--signal-warn)" }} />,
    skills: ["OWASP Top 10", "Snort IDS/IPS", "Fail2Ban", "UFW", "SSH hardening", "Traefik (TLS)"],
  },
  {
    title: "Automatización & Infraestructura",
    icon: <Cog className="h-6 w-6" style={{ color: "var(--text)" }} />,
    skills: ["Docker", "n8n", "Colas (Message Queues)", "Coolify"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Terminal className="h-6 w-6" style={{ color: "var(--text)" }} />,
    skills: ["Git", "GitHub", "Vercel", "CI/CD"],
  },
] as const;

export const TechStack = memo(() => {
  return (
    <section id="stack" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-12" style={{ background: "var(--bg)" }}>
      <div className="mb-16 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: "var(--text)" }}
        >
          Stack técnico
        </motion.h2>
        <p className="mt-3 text-base" style={{ color: "var(--text-muted)" }}>
          Herramientas agrupadas por lo que resuelven: interfaz, backend, decisión algorítmica y seguridad de infraestructura.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stackCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="flex flex-col rounded-lg border p-6"
            style={{ background: "var(--surface)", borderColor: "var(--line)" }}
          >
            <div className="mb-4 flex items-center gap-3">
              {category.icon}
              <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded border px-2.5 py-1 font-mono text-xs"
                  style={{ borderColor: "var(--line)", color: "var(--text-muted)", background: "var(--bg)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

TechStack.displayName = "TechStack";
