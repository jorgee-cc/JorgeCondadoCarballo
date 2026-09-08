import React, { memo } from "react";
import { motion } from "motion/react";
import { Mic, Cpu, Share2, Compass, ArrowRight, MonitorPlay, Zap, Activity, Palette, Github } from "lucide-react";

const projects = [
  {
    title: "DistributedMessagingSystem-Multi-threaded-TCP-RPC-SOAP-Architecture",
    description: "Sistema distribuido de mensajería de alta concurrencia con servidor multihilo en C, clientes Python, entregas diferidas, transferencia P2P y servicios SOAP y ONC-RPC.",
    image: "/images/distributed-messaging-system-thumb.svg",
    features: [
      { icon: <Cpu className="h-4 w-4" />, text: "C · pthreads" },
      { icon: <Share2 className="h-4 w-4" />, text: "TCP + P2P" },
      { icon: <Compass className="h-4 w-4" />, text: "SOAP + ONC-RPC" },
      { icon: <Activity className="h-4 w-4" />, text: "Store & Forward" },
    ],
    color: "from-emerald-500/20 to-cyan-500/20",
    border: "group-hover:border-emerald-500/50",
    textHover: "group-hover:text-emerald-300",
    link: "https://github.com/jorgee-cc/DistributedMessagingSystem-Multi-threaded-TCP-RPC-SOAP-Architecture",
    external: true,
    isGithub: true,
    ctaLabel: "Ver en GitHub",
  },
  {
    title: "Optimización de Flotas de Autobuses",
    description: "Case study de Investigación Operativa con dos modelos MIP en GNU MathProg, resueltos por GLPK y orquestados desde Python.",
    image: "/images/linear-programming-bus-scheduling-thumb.svg",
    features: [
      { icon: <MonitorPlay className="h-4 w-4" />, text: "Python 3" },
      { icon: <Cpu className="h-4 w-4" />, text: "GLPK" },
      { icon: <Compass className="h-4 w-4" />, text: "Programación MIP" },
      { icon: <Activity className="h-4 w-4" />, text: "GNU MathProg" },
    ],
    color: "from-emerald-500/20 to-amber-500/20",
    border: "group-hover:border-emerald-500/50",
    textHover: "group-hover:text-emerald-300",
    link: "/templates/Linear-Programming-Bus-Scheduling.html",
    external: false,
    isGithub: false,
    ctaLabel: "Ver Detalles",
  },
  {
    title: "Binairo CSP & A* Search Engine",
    description: "Case study de IA aplicada con un solver CSP para Binairo y un motor A* en C++ sobre grafos DIMACS de carreteras reales.",
    image: "/images/ai-csp-heuristic-search-thumb.svg",
    features: [
      { icon: <MonitorPlay className="h-4 w-4" />, text: "Python 3" },
      { icon: <Cpu className="h-4 w-4" />, text: "C++17" },
      { icon: <Compass className="h-4 w-4" />, text: "CSP + A*" },
      { icon: <Activity className="h-4 w-4" />, text: "Heurística Haversine" },
    ],
    color: "from-cyan-500/20 to-violet-500/20",
    border: "group-hover:border-cyan-500/50",
    textHover: "group-hover:text-cyan-300",
    link: "/templates/AI-csp-HeuristicSearch.html",
    external: false,
    isGithub: false,
    ctaLabel: "Ver Detalles",
  },
  {
    title: "Spider-Man: Brand New Day",
    description: "Landing narrativa interactiva con animaciones de alto rendimiento ligadas al scroll y ambiente sonoro real.",
    image: "/images/Spiderman_BrandNewDay.png",
    features: [
      { icon: <MonitorPlay className="h-4 w-4" />, text: "Astro & React" },
      { icon: <Zap className="h-4 w-4" />, text: "Framer Motion" },
      { icon: <Activity className="h-4 w-4" />, text: "Web Audio API" },
      { icon: <Palette className="h-4 w-4" />, text: "UI/UX Cinematográfica" },
    ],
    color: "from-red-500/20 to-blue-500/20",
    border: "group-hover:border-red-500/50",
    textHover: "group-hover:text-red-400",
    link: "https://spiderman-brand-new-day-gamma.vercel.app/",
    external: true,
    isGithub: false,
    ctaLabel: "Ver en vivo",
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
    color: "from-purple-500/20 to-blue-500/20",
    border: "group-hover:border-purple-500/50",
    textHover: "group-hover:text-purple-400",
    link: "https://prototipo-velada-vi-jorge-condado-c.vercel.app/",
    external: true,
    isGithub: false,
    ctaLabel: "Ver en vivo",
  },
  {
    title: "IronMan Ubiquitous System",
    description: "Sistema ubicuo para triatlón que coordina atleta, dron y equipo de apoyo con comunicación en tiempo real y control por NUI.",
    image: "/images/ironman-portfolio-thumb.svg",
    features: [
      { icon: <Mic className="h-4 w-4" />, text: "Voz y SOS" },
      { icon: <Cpu className="h-4 w-4" />, text: "Sensores y gestos" },
      { icon: <Share2 className="h-4 w-4" />, text: "Socket.IO" },
      { icon: <Activity className="h-4 w-4" />, text: "Redundancia total" },
    ],
    color: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50",
    textHover: "group-hover:text-orange-400",
    link: "/templates/ironman-portfolio.html",
    external: false,
    isGithub: false,
    ctaLabel: "Ver Detalles",
  },
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
    external: false,
    isGithub: false,
    ctaLabel: "Ver Detalles",
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
            Experiencia desarrollando desde interfaces ultra fluidas a 60fps hasta sistemas ubicuos conectados en tiempo real.
          </p>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-1 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] ${project.border}`}
          >
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
                      <span className="text-blue-400">{feature.icon}</span>
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
                  {project.isGithub ? <Github className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                  {project.ctaLabel}
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
