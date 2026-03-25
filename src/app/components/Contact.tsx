import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, ChevronRight, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-10 sm:p-20 text-center shadow-[0_0_100px_rgba(168,85,247,0.15)] ring-1 ring-zinc-800 backdrop-blur-3xl"
      >
        {/* Abstract animated background inside card */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-zinc-950 to-zinc-950 opacity-60 transition-opacity duration-1000 group-hover:opacity-100" />
        
        <div className="relative z-10">
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            ¿Construimos juntos la web que romperá internet?
          </h2>
          
          <p className="mx-auto mb-16 max-w-xl text-xl font-medium text-zinc-400 sm:text-2xl">
            La Velada VI necesita infraestructura de verdad, no un side project. Hablemos de cómo escalar a millones de espectadores.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:jorge.condado.carballo@gmail.com" // Placeholder email, user only provided "Email"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] sm:w-auto"
            >
              <Mail className="h-6 w-6" />
              <span>jorge.condado.carballo@gmail.com</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+34611176138" // Placeholder phone
              className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-zinc-700 bg-zinc-900/50 px-8 py-4 font-bold text-white transition-all hover:border-zinc-500 hover:bg-zinc-800 sm:w-auto backdrop-blur-md"
            >
              <Phone className="h-6 w-6" />
              <span>+34 611 17 61 38</span>
            </motion.a>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 border-t border-zinc-800 pt-8 text-zinc-500">
            <a href="https://github.com/jorgee-cc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a href="https://prototipo-velada-vi-jorge-condad-git-cc4870-jorgee-ccs-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
              <ChevronRight className="h-5 w-5" /> Prototipo
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
