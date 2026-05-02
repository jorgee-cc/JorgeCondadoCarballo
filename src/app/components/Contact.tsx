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
        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/90 p-6 text-center shadow-[0_24px_120px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:rounded-[2.5rem] sm:p-10 lg:p-16"
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.22),_transparent_46%),linear-gradient(180deg,rgba(24,24,27,0.96),rgba(9,9,11,1))] opacity-90 transition-opacity duration-1000 group-hover:opacity-100" />
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-200/80 sm:text-sm">
            Contacto
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            ¿Construimos juntos nuevos proyectos?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            Si tienes una idea, una colaboración o necesitas ayuda con un proyecto, puedes escribirme o llamarme.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:mt-10 sm:flex-row sm:items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:jorge.condado.carballo@gmail.com" // Placeholder email, user only provided "Email"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 px-5 py-3.5 font-semibold text-white shadow-[0_12px_40px_rgba(168,85,247,0.35)] transition-all hover:shadow-[0_18px_50px_rgba(168,85,247,0.5)] sm:w-auto sm:px-7"
            >
              <Mail className="h-5 w-5" />
              <span>jorge.condado.carballo@gmail.com</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+34611176138" // Placeholder phone
              className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10 sm:w-auto sm:px-7"
            >
              <Phone className="h-5 w-5" />
              <span>+34 611 17 61 38</span>
            </motion.a>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-6 border-t border-white/10 pt-6 text-sm text-zinc-400 sm:mt-14 sm:gap-8 sm:pt-8">
            <a href="https://github.com/jorgee-cc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

Contact.displayName = "Contact";
