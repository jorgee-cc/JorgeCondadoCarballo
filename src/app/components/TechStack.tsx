import React, { memo } from "react";
import { motion } from "motion/react";
import { Code2, Server, Terminal, Settings } from "lucide-react";

const stackCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="h-6 w-6 text-fuchsia-400" />,
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    glow: "shadow-[0_0_30px_rgba(217,70,239,0.15)]",
    border: "border-fuchsia-500/20"
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-cyan-400" />,
    skills: ["Python", "Flask", "SQL", "C", "C++"],
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    border: "border-cyan-500/20"
  },
  {
    title: "DevOps & Cloud",
    icon: <Terminal className="h-6 w-6 text-purple-400" />,
    skills: ["Git", "GitHub", "Vercel", "CI/CD"],
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    border: "border-purple-500/20"
  },
  {
    title: "Sistemas & Arquitectura",
    icon: <Settings className="h-6 w-6 text-emerald-400" />,
    skills: ["n8n", "Automatización", "Colas (Message Queues)"],
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.15)]",
    border: "border-emerald-500/20"
  }
] as const;

export const TechStack = memo(() => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-12">
      <div className="mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-md"
        >
          STACK TÉCNICO
        </motion.h2>
        <p className="mt-4 text-xl font-medium text-zinc-400">
          Herramientas para escalar a millones de usuarios
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stackCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className={`flex flex-col rounded-2xl border bg-zinc-900/50 p-6 backdrop-blur-xl transition-all duration-300 ${category.border} ${category.glow}`}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-950 shadow-inner">
              {category.icon}
            </div>
            
            <h3 className="mb-4 text-xl font-bold text-white">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
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
