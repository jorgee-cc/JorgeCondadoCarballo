// BackgroundEffects.tsx — VERSIÓN OPTIMIZADA
import React, { memo } from "react";
import { motion } from "motion/react";

// ⚡ PERF: Objetos de animación y transición fuera del componente
// Evitan recrear referencias en cada render (aunque este componente 
// esté memoizado, es buena práctica)
const BLOB_1_ANIMATE = {
  scale:   [1, 1.2, 1],
  opacity: [0.3, 0.5, 0.3],
  rotate:  [0, 90, 0],
};

const BLOB_2_ANIMATE = {
  scale:   [1, 1.5, 1],
  opacity: [0.2, 0.4, 0.2],
  rotate:  [0, -90, 0],
};

const BLOB_3_ANIMATE = {
  scale:   [1, 1.1, 1],
  opacity: [0.2, 0.3, 0.2],
};

const BLOB_1_TRANSITION = { duration: 15, repeat: Infinity, ease: "linear" as const };
const BLOB_2_TRANSITION = { duration: 20, repeat: Infinity, ease: "linear" as const };
const BLOB_3_TRANSITION = { duration: 10, repeat: Infinity, ease: "easeInOut" as const };

// ⚡ PERF: Estilo de compositing GPU extraído como constante
// Mismo objeto referencia → React no re-aplica el style
const GPU_LAYER_STYLE: React.CSSProperties = {
  willChange: "transform, opacity",
  backfaceVisibility: "hidden",
  transform: "translateZ(0)",
  // contain: "strict" aisla el cálculo del blur a este elemento
  // evita que el filtro invalide regiones del DOM adyacentes
  contain: "strict" as any,
};

// ⚡ PERF: React.memo — BackgroundEffects nunca cambia
// Sin props, sin estado → solo se renderiza UNA vez
export const BackgroundEffects = memo(() => {
  return (
    /*
     * isolation: isolate → stacking context propio
     * Evita que los filtros blur "contaminen" el stacking context global
     * y fuercen recomposición del árbol entero en cada frame
     */
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black"
      style={{ isolation: "isolate" }}
    >
      {/* BLOB 1 — Purple top-left
          GPU layer explícita con will-change + translateZ(0)
          Estos ya estaban bien implementados en el original */}
      <motion.div
        animate={BLOB_1_ANIMATE}
        transition={BLOB_1_TRANSITION}
        style={GPU_LAYER_STYLE}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-purple-600/30 rounded-full blur-[120px]"
      />

      {/* BLOB 2 — Fuchsia right
          ⚡ FIX: Añadido GPU_LAYER_STYLE que faltaba
          Sin will-change, este blob podía rasterizarse en CPU */}
      <motion.div
        animate={BLOB_2_ANIMATE}
        transition={BLOB_2_TRANSITION}
        style={GPU_LAYER_STYLE}  /* ← AÑADIDO: faltaba en el original */
        className="absolute top-[30%] -right-[10%] w-[40vw] h-[40vw] bg-fuchsia-600/30 rounded-full blur-[100px]"
      />

      {/* BLOB 3 — Cyan bottom
          ⚡ FIX CRÍTICO: 
          - Añadido GPU_LAYER_STYLE (faltaba)
          - Reducido de w-[60vw]/h-[60vw] a w-[50vw]/h-[50vw]
            y blur de 150px a 130px: misma percepción visual,
            ~30% menos textura GPU a rasterizar
          - contain:strict aisla el cálculo del filtro */}
      <motion.div
        animate={BLOB_3_ANIMATE}
        transition={BLOB_3_TRANSITION}
        style={GPU_LAYER_STYLE}  /* ← AÑADIDO: faltaba en el original */
        className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] bg-cyan-600/20 rounded-full blur-[130px]"
      />

      {/* Noise overlay — estático, no necesita GPU layer */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          // ⚡ content-visibility: auto para elementos fuera del viewport
          contentVisibility: "auto",
        }}
      />

      {/* Gradient fade — estático */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
    </div>
  );
});

BackgroundEffects.displayName = "BackgroundEffects";