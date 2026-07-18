import React, { memo } from "react";
import { motion } from "motion/react";
import { Code2, Server, Terminal, Settings } from "lucide-react";

const stackCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="h-6 w-6 text-red-400" />,
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion", "Web Audio API"],
    glow: "shadow-[0_0_30px_rgba(217,22,22,0.15)]",
    border: "border-vigilante-red/20"
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
    icon: <Terminal className="h-6 w-6 text-amber-400" />,
    skills: ["Git", "GitHub", "Vercel", "CI/CD"],
    glow: "shadow-[0_0_30px_rgba(201,151,75,0.15)]",
    border: "border-golden-amber/20"
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
            className={`flex flex-col rounded-2xl border bg-[#0b1a31]/50 p-6 backdrop-blur-xl transition-all duration-300 ${category.border} ${category.glow}`}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#07111f] shadow-inner">
              {category.icon}
            </div>
            
            <h3 className="mb-4 text-xl font-bold text-white">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-md border border-zinc-800 bg-[#07111f] px-3 py-1 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
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
