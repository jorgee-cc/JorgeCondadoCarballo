import React, { memo } from "react";
import { motion } from "motion/react";
import { Github, Menu } from "lucide-react";

export const Header = memo(() => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-purple-500/10 bg-black/80 backdrop-blur-2xl">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-12">
        {/* Glow effect background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black opacity-60" />

        <div className="relative z-10 flex items-center gap-8 flex-1">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-black uppercase tracking-tight text-white">
              Jorge
            </span>
            <span className="text-xl font-black uppercase tracking-tight bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Condado
            </span>
          </motion.div>
        </div>

        {/* GitHub Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.a
            href="https://github.com/jorgee-cc"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 font-semibold text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all hover:border-purple-500/50 hover:bg-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] backdrop-blur-md"
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
