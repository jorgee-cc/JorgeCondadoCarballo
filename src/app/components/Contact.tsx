import React, { memo } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Github } from "lucide-react";

export const Contact = memo(() => {
  return (
    <section id="contacto" className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="group relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 text-center shadow-[0_24px_120px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:rounded-[2.5rem] sm:p-10 lg:p-16"
      >
        <div className="absolute inset-0 z-0 bg-[var(--surface)] opacity-90 transition-opacity duration-1000 group-hover:opacity-100" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--signal-warn)] sm:text-sm">
            Contacto
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-[var(--text)] sm:text-5xl md:text-6xl">
            ¿Trabajamos juntos? <br className="hidden sm:block" /> Hablemos.
          </h2>

          <div className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base sm:leading-8 flex flex-col gap-4">
            <p>
              Busco siempre nuevos retos donde pueda aportar valor tanto en la arquitectura backend como en la experiencia de usuario frontend.
            </p>
            <p>
              Si tienes un proyecto en mente, necesitas a alguien resolutivo para tu equipo, o simplemente quieres hablar de tecnología, no dudes en escribirme.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:mt-10 sm:flex-row sm:items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:jorge.condado.carballo@gmail.com"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[var(--signal-warn)] px-5 py-3.5 font-semibold text-[var(--bg)] transition-all hover:brightness-110 sm:w-auto sm:px-7"
            >
              <Mail className="h-5 w-5" />
              <span>jorge.condado.carballo@gmail.com</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+34611176138"
              className="flex w-full items-center justify-center gap-3 rounded-full border border-[var(--line)] bg-[var(--bg)] px-5 py-3.5 font-semibold text-[var(--text)] transition-all hover:border-[var(--text-muted)] sm:w-auto sm:px-7"
            >
              <Phone className="h-5 w-5" />
              <span>+34 611 17 61 38</span>
            </motion.a>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-6 border-t border-[var(--line)] pt-6 text-sm text-[var(--text-muted)] sm:mt-14 sm:gap-8 sm:pt-8">
            <a href="https://github.com/jorgee-cc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-[var(--text)]">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

Contact.displayName = "Contact";
            
