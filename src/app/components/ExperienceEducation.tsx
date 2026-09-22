import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  ShieldAlert,
  HeartHandshake,
  GraduationCap,
  Languages,
  ChevronDown,
  LucideIcon,
} from "lucide-react";

type Experience = {
  id: string;
  title: string;
  reframe: string;
  description: string;
  Icon: LucideIcon;
  accent: string;
  detail: {
    context: string;
    challenge: string;
    action: string[];
  };
};

const experiences: Experience[] = [
  {
    id: "ventas",
    title: "Ventas",
    reframe: "Comunicación & Persuasión",
    description: "Saber vender una idea es tan importante como programarla. Experiencia real convenciendo a usuarios y stakeholders.",
    Icon: MessageCircle,
    accent: "var(--signal-ok)",
    detail: {
      context: "Puma (Sept2025-Act) y Samsung (Mar 2026) — promotor de ventas en centro comercial, con clientes nacionales e internacionales.",
      challenge: "Captar y fidelizar clientes en un entorno de alta rotación, incluyendo público internacional que requería atención en inglés y picos de tráfico en eventos como Hyrox.",
      action: [
        "Atención personalizada asesorando sobre características, tallas y beneficios de producto.",
        "Redirección proactiva de clientes hacia el stand oficial, traduciendo especificaciones técnicas en beneficios cotidianos fáciles de entender.",
        "Atención y venta a clientes internacionales en inglés durante campañas de lanzamiento.",
      ],
    },
  },
  {
    id: "arbitro",
    title: "Árbitro",
    reframe: "Decisiones bajo presión",
    description: "Cuando el partido está caliente y todos te miran, tienes milisegundos para actuar. Igual que cuando el servidor falla en producción.",
    Icon: ShieldAlert,
    accent: "var(--signal-warn)",
    detail: {
      context: "Federación de Madrid de Voleibol (Nov 2023 – Ene 2026) — árbitro de competición oficial.",
      challenge: "Tomar decisiones imparciales en tiempo real, sin margen de revisión, sujeto a un código de ética estricto y bajo la presión visible de jugadores y público.",
      action: [
        "Mediación y resolución de conflictos surgidos durante la competición.",
        "Seguimiento del código de ética arbitral y conducción deportiva independiente e imparcial.",
        "Esta capacidad de decidir rápido y sin margen de error inspiró directamente mi TFG: un sistema de asignación automática de árbitros mediante algoritmos de búsqueda.",
      ],
    },
  },
  {
    id: "atencion",
    title: "Atención al Cliente",
    reframe: "UX en el mundo real",
    description: "Tratar con el usuario final te enseña más de usabilidad y flujos que cualquier libro de diseño. Empatía extrema.",
    Icon: HeartHandshake,
    accent: "var(--text)",
    detail: {
      context: "Aldeas Infantiles SOS (Sept–Oct 2025) y Unicampus (Sept 2023 – Sept 2025, roles de Comercial y Staff).",
      challenge: "Captar socios y clientes en espacios públicos con comunicación cercana, y coordinar grupos y actividades recreativas en tiempo real, reaccionando rápido ante riesgos o problemas.",
      action: [
        "Captación y fidelización de socios mediante comunicación clara y adaptada a cada persona.",
        "Gestión de registros e informes garantizando cumplimiento de objetivos.",
        "Actuación rápida ante problemas o riesgos detectados durante actividades, coordinando grupos completos.",
      ],
    },
  },
];

const ExperienceCard = memo(({ exp, idx }: { exp: Experience; idx: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="rounded-lg border p-6"
      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
    >
      <div className="flex items-start gap-4">
        <div
          className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg"
          style={{ background: "var(--bg)" }}
        >
          <exp.Icon className="h-5 w-5" style={{ color: exp.accent }} />
        </div>
        <div className="flex-1">
          <div className="mb-1 flex flex-wrap items-baseline gap-2">
            <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
              {exp.reframe}
            </h3>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              ({exp.title})
            </span>
          </div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            {exp.description}
          </p>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide"
            style={{ color: exp.accent }}
          >
            Ver detalles
            <ChevronDown
              className="h-3.5 w-3.5 transition-transform duration-200"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div
                  className="mt-4 space-y-3 border-t pt-4 text-sm"
                  style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: exp.accent }}>
                      Contexto
                    </span>
                    <p className="mt-1">{exp.detail.context}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: exp.accent }}>
                      Reto
                    </span>
                    <p className="mt-1">{exp.detail.challenge}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: exp.accent }}>
                      Acciones
                    </span>
                    <ul className="mt-1 list-inside list-disc space-y-1">
                      {exp.detail.action.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
});
ExperienceCard.displayName = "ExperienceCard";

export const ExperienceEducation = memo(() => {
  return (
    <section id="experiencia" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-12" style={{ background: "var(--bg)" }}>
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Experience Reframed */}
        <div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--text)" }}>
              Experiencia profesional
            </h2>
            <p className="mt-3 text-base" style={{ color: "var(--text-muted)" }}>
              No es un CV clásico: cada rol previo forjó una capacidad concreta que aplico hoy al desarrollo.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={exp.id} exp={exp} idx={idx} />
            ))}
          </div>
        </div>

        {/* Education + Languages */}
        <div className="lg:border-l lg:pl-16" style={{ borderColor: "var(--line)" }}>
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--text)" }}>
              Formación
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border p-8"
            style={{ borderColor: "var(--line)", background: "var(--surface)" }}
          >
            <div
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg"
              style={{ background: "var(--bg)" }}
            >
              <GraduationCap className="h-7 w-7" style={{ color: "var(--signal-ok)" }} />
            </div>

            <h3 className="mb-1 text-xl font-semibold" style={{ color: "var(--text)" }}>
              Ingeniería Informática
            </h3>
            <p className="mb-4 text-base font-medium" style={{ color: "var(--text-muted)" }}>
              Universidad Carlos III de Madrid · Grado 4º curso · 2027
            </p>

            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs"
              style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--signal-ok)" }}
              />
              Impartido en bilingüe (castellano e inglés).
            </div>
          </motion.div>

          {/*
            IDIOMAS — Elige la opción que corresponda a tu situación real
            antes de publicar y borra la que no uses:

            OPCIÓN A — si tienes un certificado oficial (Cambridge, TOEFL, IELTS):
            reemplaza el texto de abajo por el nivel MCER exacto y el nombre
            del certificado, p. ej. "Inglés — C1 Advanced (Cambridge)".

            OPCIÓN B — si no tienes certificado formal (la usada por defecto
            aquí): nivel autoevaluado respaldado por hechos verificables.
          */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6 rounded-lg border p-8"
            style={{ borderColor: "var(--line)", background: "var(--surface)" }}
          >
            <div
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg"
              style={{ background: "var(--bg)" }}
            >
              <Languages className="h-7 w-7" style={{ color: "var(--signal-warn)" }} />
            </div>

            <h3 className="mb-1 text-xl font-semibold" style={{ color: "var(--text)" }}>
              Inglés — C1 (autoevaluado)
            </h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Grado impartido en inglés y español en la UC3M; atención habitual a clientes internacionales
              en Puma, Samsung y en la F1.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ExperienceEducation.displayName = "ExperienceEducation";
