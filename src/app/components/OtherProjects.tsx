import React, { memo } from "react";
import { motion } from "motion/react";
import { Mic, Cpu, Share2, Compass, ArrowRight, MonitorPlay, Zap, Activity, Palette, Github, ShieldCheck, KeyRound, LockKeyhole, FileSignature } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  features: { icon: React.ReactNode; text: string }[];
  link: string | null;
  external: boolean;
  isGithub: boolean;
  ctaLabel: string;
};

type Category = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  accent: string;
  note?: string;
  projects: Project[];
};

const categories: Category[] = [
  {
    id: "ia",
    label: "A",
    title: "IA & Algoritmos de Búsqueda",
    subtitle: "Problemas de decisión y optimización resueltos con búsqueda informada y programación matemática, no solo con librerías.",
    accent: "var(--signal-ok)",
    projects: [
      {
        title: "Binairo CSP & Motor de Búsqueda A*",
        description: "Solver CSP para el puzzle Binairo y un motor A* en C++17 sobre grafos DIMACS de carreteras reales, con heurística admisible de Haversine.",
        image: "/images/ai-csp-heuristic-search-thumb.svg",
        features: [
          { icon: <MonitorPlay className="h-4 w-4" />, text: "Python 3" },
          { icon: <Cpu className="h-4 w-4" />, text: "C++17" },
          { icon: <Compass className="h-4 w-4" />, text: "CSP + A*" },
          { icon: <Activity className="h-4 w-4" />, text: "Heurística Haversine" },
        ],
        link: "/templates/AI-csp-HeuristicSearch.html",
        external: false,
        isGithub: false,
        ctaLabel: "Ver detalles",
      },
      {
        title: "Optimización de Flotas de Autobuses",
        description: "Case study de investigación operativa: dos modelos de programación lineal entera (MIP) en GNU MathProg, resueltos con GLPK y orquestados desde Python.",
        image: "/images/linear-programming-bus-scheduling-thumb.svg",
        features: [
          { icon: <MonitorPlay className="h-4 w-4" />, text: "Python 3" },
          { icon: <Cpu className="h-4 w-4" />, text: "GLPK" },
          { icon: <Compass className="h-4 w-4" />, text: "Programación MIP" },
          { icon: <Activity className="h-4 w-4" />, text: "GNU MathProg" },
        ],
        link: "/templates/Linear-Programming-Bus-Scheduling.html",
        external: false,
        isGithub: false,
        ctaLabel: "Ver detalles",
      },
    ],
  },
  {
    id: "security",
    label: "B",
    title: "Ciberseguridad & Sistemas",
    subtitle: "Arquitecturas de bajo nivel y despliegues propios donde la seguridad y la concurrencia son requisito, no un extra.",
    accent: "var(--signal-warn)",
    note: "El sistema de gestión de Talleres Oja —proyecto principal— pertenece también a esta categoría; su ficha completa está más arriba, en la sección de Proyecto Principal.",
    projects: [
      {
        title: "DMS Multi-threaded TCP, RPC, SOAP Architecture",
        description: "Sistema distribuido de mensajería de alta concurrencia con servidor multihilo en C, clientes en Python, entregas diferidas, transferencia P2P y servicios SOAP y ONC-RPC.",
        image: "/images/distributed-messaging-system-thumb.svg",
        features: [
          { icon: <Cpu className="h-4 w-4" />, text: "C · pthreads" },
          { icon: <Share2 className="h-4 w-4" />, text: "TCP + P2P" },
          { icon: <Compass className="h-4 w-4" />, text: "SOAP + ONC-RPC" },
          { icon: <Activity className="h-4 w-4" />, text: "Store & Forward" },
        ],
        link: "https://github.com/jorgee-cc/DistributedMessagingSystem-Multi-threaded-TCP-RPC-SOAP-Architecture",
        external: true,
        isGithub: true,
        ctaLabel: "Ver en GitHub",
      },
      {
        title: "IronMan Ubiquitous System",
        description: "Sistema ubicuo para triatlón que coordina atleta, dron y equipo de apoyo con comunicación en tiempo real, control por NUI y redundancia ante fallos.",
        image: "/images/ironman-portfolio-thumb.svg",
        features: [
          { icon: <Mic className="h-4 w-4" />, text: "Voz y SOS" },
          { icon: <Cpu className="h-4 w-4" />, text: "Sensores y gestos" },
          { icon: <Share2 className="h-4 w-4" />, text: "Socket.IO" },
          { icon: <Activity className="h-4 w-4" />, text: "Redundancia total" },
        ],
        link: "/templates/ironman-portfolio.html",
        external: false,
        isGithub: false,
        ctaLabel: "Ver detalles",
      },
      {
        title: "SecureSend: PKI & Cifrado Híbrido",
        description: "Gestor CLI de documentos confidenciales en Python con una PKI jerárquica X.509, cifrado AES-GCM, encapsulación RSA-OAEP y firmas digitales RSA-PSS.",
        image: "/images/pki-thumb.svg",
        features: [
          { icon: <ShieldCheck className="h-4 w-4" />, text: "PKI X.509" },
          { icon: <LockKeyhole className="h-4 w-4" />, text: "AES-256-GCM" },
          { icon: <KeyRound className="h-4 w-4" />, text: "RSA-OAEP" },
          { icon: <FileSignature className="h-4 w-4" />, text: "RSA-PSS" },
        ],
        link: "/templates/pki.html",
        external: false,
        isGithub: false,
        ctaLabel: "Ver detalles",
      },
    ],
  },
  {
    id: "frontend",
    label: "C",
    title: "Frontend & Producto Digital",
    subtitle: "Interfaces de alto rendimiento donde la prioridad es la experiencia: animación, fluidez y storytelling.",
    accent: "var(--text)",
    projects: [
      {
        title: "Spider-Man: Brand New Day",
        description: "Landing narrativa interactiva con animaciones de alto rendimiento ligadas al scroll y ambiente sonoro real.",
        image: "/images/Spiderman_BrandNewDay.png",
        features: [
          { icon: <MonitorPlay className="h-4 w-4" />, text: "Astro & React" },
          { icon: <Zap className="h-4 w-4" />, text: "Framer Motion" },
          { icon: <Activity className="h-4 w-4" />, text: "Web Audio API" },
          { icon: <Palette className="h-4 w-4" />, text: "UI/UX cinematográfica" },
        ],
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
          { icon: <Activity className="h-4 w-4" />, text: "60 FPS animaciones" },
          { icon: <Cpu className="h-4 w-4" />, text: "Rendimiento extremo" },
        ],
        link: "https://prototipo-velada-vi-jorge-condado-c.vercel.app/",
        external: true,
        isGithub: false,
        ctaLabel: "Ver en vivo",
      },
      {
        title: "Aplicaciones Web APIs",
        description: "Interfaces avanzadas que conectan el mundo físico con el digital usando APIs nativas del navegador y Node.js.",
        image: "https://images.unsplash.com/photo-1765445665883-085301570c87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBjb2RlfGVufDF8fHx8MTc3NDQ0NTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        features: [
          { icon: <Compass className="h-4 w-4" />, text: "Geolocalización" },
          { icon: <Cpu className="h-4 w-4" />, text: "Sensores" },
          { icon: <Mic className="h-4 w-4" />, text: "Reconocimiento de voz" },
          { icon: <Share2 className="h-4 w-4" />, text: "Backend Node.js" },
        ],
        link: "https://github.com/jorgee-cc/Apps_JS",
        external: true,
        isGithub: true,
        ctaLabel: "Ver en GitHub",
      },
    ],
  },
];

const ProjectCard = memo(({ project, idx }: { project: Project; idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: idx * 0.08 }}
    className="flex flex-col overflow-hidden rounded-lg border"
    style={{ borderColor: "var(--line)", background: "var(--surface)" }}
  >
    <div className="aspect-video w-full overflow-hidden" style={{ background: "var(--bg)" }}>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        width={800}
        height={450}
        className="h-full w-full object-cover opacity-80"
      />
    </div>

    <div className="flex flex-1 flex-col p-6">
      <h4 className="mb-2 text-lg font-semibold" style={{ color: "var(--text)" }}>
        {project.title}
      </h4>
      <p className="mb-6 text-sm" style={{ color: "var(--text-muted)" }}>
        {project.description}
      </p>

      <div className="mt-auto grid grid-cols-2 gap-2">
        {project.features.map((feature, fIdx) => (
          <div
            key={fIdx}
            className="flex items-center gap-2 rounded px-2.5 py-1.5 font-mono text-xs"
            style={{ background: "var(--bg)", color: "var(--text-muted)" }}
          >
            {feature.icon}
            {feature.text}
          </div>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          {...(project.external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          {project.isGithub ? <Github className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          {project.ctaLabel}
        </a>
      )}
    </div>
  </motion.div>
));
ProjectCard.displayName = "ProjectCard";

export const OtherProjects = memo(() => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-12" style={{ background: "var(--bg)" }}>
      <div className="mb-16 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--text)" }}>
          Más proyectos
        </h2>
        <p className="mt-3 text-base" style={{ color: "var(--text-muted)" }}>
          Agrupados por el problema que resuelven, no por orden cronológico.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {categories.map((category) => (
          <div key={category.id}>
            <div
              className="mb-6 flex items-baseline gap-3 border-b pb-4"
              style={{ borderColor: "var(--line)" }}
            >
              <span
                className="font-mono text-xs"
                style={{ color: category.accent }}
              >
                [{category.label}]
              </span>
              <div>
                <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>
                  {category.title}
                </h3>
                <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                  {category.subtitle}
                </p>
              </div>
            </div>

            {category.note && (
              <p className="mb-6 text-sm italic" style={{ color: "var(--text-muted)" }}>
                {category.note}
              </p>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              {category.projects.map((project, idx) => (
                <ProjectCard key={project.title} project={project} idx={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

OtherProjects.displayName = "OtherProjects";
