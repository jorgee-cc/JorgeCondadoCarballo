import React, { memo } from "react";
import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

const NAV_LINKS = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto",  label: "Contacto"  },
] as const;

export const Header = memo(() => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-2xl">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-12">
        {/* Glow effect background */}
        <div className="absolute inset-0 z-0 bg-[var(--surface)]/60" />

        <div className="relative z-10 flex items-center gap-8 flex-1">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <a href="/" className="flex items-center gap-2" aria-label="Ir a la página de inicio">
              <span className="text-xl font-black uppercase tracking-tight text-white">
                Jorge
              </span>
              <span className="text-xl font-black uppercase tracking-tight text-[var(--signal-warn)]">
                Condado
              </span>
            </a>
          </motion.div>
          
          <nav className="hidden sm:flex items-center gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 flex items-center gap-2"
        >
          <motion.a
            href="https://www.linkedin.com/in/jorge-condado-carballo-4065bb2b4/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Abrir perfil de LinkedIn"
            className="flex items-center gap-2 rounded-full border border-[var(--signal-ok)]/40 bg-[var(--signal-ok)]/10 px-4 py-2 font-semibold text-[var(--signal-ok)] transition-all hover:border-[var(--signal-ok)]/60 hover:bg-[var(--signal-ok)]/20 backdrop-blur-md"
          >
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/jorgee-cc"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border border-[var(--signal-warn)]/40 bg-[var(--signal-warn)]/10 px-4 py-2 font-semibold text-[var(--signal-warn)] transition-all hover:border-[var(--signal-warn)]/60 hover:bg-[var(--signal-warn)]/20 backdrop-blur-md"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
