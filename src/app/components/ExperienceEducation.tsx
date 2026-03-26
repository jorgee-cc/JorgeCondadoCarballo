import React from "react";
import { motion } from "motion/react";
import { MessageCircle, ShieldAlert, HeartHandshake, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Ventas",
    reframe: "Comunicación & Persuasión",
    description: "Saber vender una idea es tan importante como programarla. Experiencia real convenciendo a usuarios y stakeholders.",
    icon: <MessageCircle className="h-6 w-6 text-yellow-400" />
  },
  {
    title: "Árbitro",
    reframe: "Decisiones bajo presión",
    description: "Cuando el partido está caliente y todos te miran, tienes milisegundos para actuar. Igual que cuando el servidor falla en producción.",
    icon: <ShieldAlert className="h-6 w-6 text-red-400" />
  },
  {
    title: "Atención al Cliente",
    reframe: "UX en el mundo real",
    description: "Tratar con el usuario final te enseña más de usabilidad y flujos que cualquier libro de diseño. Empatía extrema.",
    icon: <HeartHandshake className="h-6 w-6 text-pink-400" />
  }
];

export const ExperienceEducation = () => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:px-12">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Experience Reframed */}
        <div>
          <div className="mb-12">
            <h2 className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-3xl font-extrabold uppercase tracking-tight text-transparent sm:text-5xl drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
              Soft Skills Hardcore
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              No es un CV clásico. Mis trabajos anteriores forjaron al desarrollador de hoy.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <motion.div
          key={idx}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          className="group relative flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-md transition-all hover:bg-zinc-800/60"
              >
          <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-950 shadow-inner group-hover:scale-110 transition-transform duration-300">
            {exp.icon}
          </div>
          <div>
            <div className="mb-1 flex items-baseline gap-3">
              <h3 className="text-xl font-bold text-white">{exp.reframe}</h3>
              <span className="text-sm font-medium text-zinc-500">
                ({exp.title})
              </span>
            </div>
            <p className="text-zinc-400">{exp.description}</p>
          </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="lg:border-l lg:border-zinc-800 lg:pl-16">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
              Formación
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-950/20 p-8 shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-md"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />
            
            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 backdrop-blur-sm ring-1 ring-blue-500/50">
                <GraduationCap className="h-8 w-8" />
              </div>
              
              <h3 className="mb-2 text-2xl font-bold text-white">Ingeniería Informática</h3>
              <p className="mb-4 text-xl font-medium text-blue-300">Universidad Carlos III</p>
              
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm font-semibold text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Impartido en Inglés
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
