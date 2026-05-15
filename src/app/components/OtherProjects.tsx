import React, { memo } from "react";
import { motion } from "motion/react";
import { Mic, Cpu, Share2, Compass, ArrowRight, MonitorPlay, Zap, Activity, Lock } from "lucide-react";

const projects = [
  {
    title: "Aplicaciones Web APIs",
    description: "Interfaces avanzadas que conectan el mundo físico con el digital usando APIs nativas del navegador y Node.js.",
    image: "https://images.unsplash.com/photo-1765445665883-085301570c87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBjb2RlfGVufDF8fHx8MTc3NDQ0NTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      { icon: <Compass className="h-4 w-4" />, text: "Geolocalización" },
      { icon: <Cpu className="h-4 w-4" />, text: "Sensores" },
      { icon: <Mic className="h-4 w-4" />, text: "Reconocimiento Voz" },
      { icon: <Share2 className="h-4 w-4" />, text: "Backend Node.js" },
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50",
    textHover: "group-hover:text-cyan-400",
    link: null,
    external: false
  },
  {
    title: "Prototipo La Velada VI",
    description: "Frontend de alto rendimiento diseñado para aguantar tráfico masivo y ofrecer una experiencia de streaming fluida.",
    image: "/images/Preview.png",
    features: [
      { icon: <MonitorPlay className="h-4 w-4" />, text: "React & Tailwind" },
      { icon: <Zap className="h-4 w-4" />, text: "Framer Motion" },
      { icon: <Activity className="h-4 w-4" />, text: "60 FPS Animaciones" },
      { icon: <Cpu className="h-4 w-4" />, text: "Rendimiento Extremo" },
    ],
    color: "from-purple-500/20 to-cyan-500/20",
    border: "group-hover:border-purple-500/50",
    textHover: "group-hover:text-purple-400",
    link: "https://prototipo-velada-vi-jorge-condado-c.vercel.app/",
    external: true
  },
  {
    title: "IronMan Ubiquitous System",
    description: "Sistema ubicuo para triatlón que coordina atleta, dron y equipo de apoyo con comunicación en tiempo real y control por NUI.",
    image: "/images/ironman-portfolio-thumb.svg",
    features: [
      { icon: <Mic className="h-4 w-4" />, text: "Voz y SOS" },
      { icon: <Cpu className="h-4 w-4" />, text: "Sensores y gestos" },
      { icon: <Share2 className="h-4 w-4" />, text: "Socket.IO" },
      { icon: <Lock className="h-4 w-4" />, text: "Redundancia total" },
    ],
    color: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50",
    textHover: "group-hover:text-orange-400",
    link: "/templates/ironman-portfolio.html",
    external: false
  }
] as const;

export const OtherProjects = memo(() => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-12">
      <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            MÁS PROYECTOS
          </h2>
          <p className="mt-4 text-xl text-zinc-400">
            De la infraestructura al frontend inmersivo
          </p>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-1 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.3)] ${project.border}`}
          >
            {/* Inner background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
            
            <div className="relative flex flex-1 flex-col rounded-xl bg-zinc-950 p-6 sm:p-8">
              <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={450}
                  className="h-full w-full object-cover opacity-60 mix-blend-screen transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                />
              </div>

              <h3 className={`mb-3 text-2xl font-bold text-white transition-colors duration-300 ${project.textHover}`}>
                {project.title}
              </h3>
              
              <p className="mb-8 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="grid grid-cols-2 gap-3">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-2 text-sm text-zinc-300">
                      <span className="text-purple-400">{feature.icon}</span>
                      {feature.text}
                    </div>
                  ))}
                </div>
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  {...(project.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors group-hover:text-white"
                >
                  Ver Detalles <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-600 cursor-default select-none">
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

OtherProjects.displayName = "OtherProjects";
