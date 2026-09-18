# Especificación — Migración global de la paleta "Bitácora de control"

> Objetivo: que **todo** el sitio (no solo los 4 componentes ya entregados) use los mismos tokens de color, para que no haya salto visual entre el Hero y el resto de secciones.

No tengo acceso a tu repo, así que esto está escrito para que tú (o un agente como opencode) lo ejecute localizando los archivos reales. Te digo exactamente qué buscar y con qué sustituirlo.

---

## Paso 1 — Localizar los 3 archivos clave

En un proyecto Astro + React + Tailwind típico, busca:

| Qué es | Ruta habitual (puede variar) |
|---|---|
| Layout raíz | `src/layouts/Layout.astro` o `src/layouts/BaseLayout.astro` |
| CSS global | `src/styles/global.css` o `src/styles/globals.css` |
| Config de Tailwind | `tailwind.config.mjs` / `.cjs` / `.ts` en la raíz del repo |

Si tu CSS global vive embebido dentro de un `<style>` en el propio `Layout.astro` (Astro lo permite), aplica el Paso 2 ahí directamente en vez de en un archivo `.css` aparte.

---

## Paso 2 — Tokens en el CSS global

Añade este bloque en tu CSS global (es el mismo contenido de `design-tokens.css` que ya te di; si ya lo pegaste, salta este paso):

```css
:root {
  --bg: #14161b;
  --surface: #1d2027;
  --text: #ededE6;
  --text-muted: #8a8f98;
  --signal-ok: #4fd1a5;
  --signal-warn: #e8a33d;
  --line: #2b2f38;
}
```

Confirma que este `global.css` está importado en `Layout.astro`. En Astro suele ser una línea así, cerca del `<head>` o al principio del `frontmatter`:

```astro
---
import "../styles/global.css";
---
```

Si no encuentras ninguna importación de un CSS global en `Layout.astro`, es señal de que los estilos globales viven en otro sitio (revisa `src/pages/_app` si usas algún wrapper, o el propio `<style is:global>` dentro de `Layout.astro`).

---

## Paso 3 — Fondo global del `<body>` / Layout

Dentro de `Layout.astro`, busca el `<body>` (o el contenedor raíz de la página) y su color de fondo. Puede estar de dos formas:

**A) Como clase de Tailwind con color arbitrario:**
```html
<!-- ANTES -->
<body class="bg-[#0b1a31] ...">

<!-- DESPUÉS -->
<body class="bg-[var(--bg)] ...">
```

**B) Como CSS en el propio archivo:**
```css
/* ANTES */
body { background-color: #07111f; }

/* DESPUÉS */
body { background-color: var(--bg); }
```

Aplica el mismo cambio a cualquier `html { background: ... }` que exista, para evitar un parpadeo de color al cargar antes de que se pinte el `<body>`.

---

## Paso 4 — Extender `tailwind.config` (opcional, recomendado si vas a seguir tocando componentes)

Esto te permite usar clases como `bg-bg`, `bg-surface`, `text-muted`, `border-line` en vez de `style={{ }}` inline en futuros componentes. No es obligatorio para que lo ya entregado funcione, pero facilita mantenerlo a partir de ahora:

```js
// tailwind.config.mjs (o .cjs/.ts — adapta la sintaxis de export a tu archivo)
export default {
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        line: "var(--line)",
        "signal-ok": "var(--signal-ok)",
        "signal-warn": "var(--signal-warn)",
        muted: "var(--text-muted)",
      },
    },
  },
};
```

---

## Paso 5 — Buscar y reemplazar en el resto de componentes (Hero incluido)

Los 4 componentes que ya te entregué (`TechStack`, `OtherProjects`, `ExperienceEducation`, `MainProject`) están migrados. **El Hero y cualquier otro componente que no te haya pedido no lo están** — no los tengo, así que no pude tocarlos. Busca en todo `src/components/` (o donde tengas los `.tsx`/`.astro` restantes) estos patrones y sustitúyelos:

| Buscar (patrón antiguo) | Sustituir por |
|---|---|
| `#0b1a31` | `var(--bg)` o `var(--surface)` según si es fondo de sección o de tarjeta |
| `#07111f` | `var(--bg)` |
| `#102742` | `var(--surface)` |
| `bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent` (o cualquier titular con `bg-clip-text`) | Quitar el gradiente; usar `style={{ color: "var(--text)" }}` con texto sólido |
| `border-zinc-800` / `border-blue-500/20` (bordes de tarjeta) | `var(--line)` |
| `text-zinc-400` / `text-zinc-500` (texto secundario) | `var(--text-muted)` |
| Cualquier `drop-shadow-[0_0_10px_rgba(...)]` decorativo sobre titulares | Eliminar — el plan pide quitar el "glow" decorativo en headlines |

Si tienes un agente (opencode) ejecutando esto, dale la instrucción explícita: *"busca estos hex/clases en todo `src/`, reemplázalos uno por uno, y después de cada archivo modificado corre el build antes de seguir con el siguiente."* No lo hagas con un `sed` global de una sola pasada — algunos de estos colores pueden reutilizarse fuera de este contexto (por ejemplo, si `border-zinc-800` se usa también en un componente que no forma parte del rediseño) y conviene revisar cada aparición con contexto antes de sustituir.

---

## Paso 6 — Las páginas de detalle de proyecto (`.html` standalone)

Aquí tienes que tomar una decisión, porque cambia el alcance:

- `talleresoja-portfolio.html` (que ya modifiqué) usa **su propio sistema de variables CSS** (`--bg: #0b0b0c`, acento morado/cian) — es distinto tanto del azul del resto del sitio como de la nueva paleta grafito/ámbar. Lo dejé intacto a propósito para no romper 1400 líneas de una página que ya funciona, y añadí la nueva sección de hardening reutilizando **sus propias variables**, no las nuevas.
- Los otros tres detalles (`AI-csp-HeuristicSearch.html`, `ironman-portfolio.html`, `Linear-Programming-Bus-Scheduling.html`) probablemente tengan cada uno su propio sistema también — no los he inspeccionado en detalle.

**Si quieres unificación 100% real**, hay dos caminos:
1. Migrar también estas 4 páginas standalone a `--bg/--surface/--text/...` (trabajo adicional, uno por archivo).
2. Aceptar que las páginas de detalle de proyecto tengan una identidad visual propia distinta de la portada — es una decisión de diseño razonable (muchos portfolios hacen esto: la portada tiene una estética unificada, y cada case-study tiene la suya) y evita reescribir cientos de líneas de CSS que ya funcionan.

Dime cuál prefieres si quieres que lo aborde; si es la opción 1 y me subes esos 3 archivos HTML restantes, puedo hacer el mismo tipo de edición quirúrgica que hice en Talleres Oja.

---

## Checklist final de verificación

- [ ] `global.css` tiene el bloque `:root` con los 7 tokens y está importado en `Layout.astro`.
- [ ] `body`/`html` usan `var(--bg)`, no el hex azul anterior.
- [ ] El Hero ya no tiene ningún hex antiguo (`#0b1a31`, `#07111f`, `#102742`) ni texto en gradiente.
- [ ] Al hacer scroll desde el Hero hacia `TechStack`, no hay ningún salto de tono de fondo visible.
- [ ] `npm run build` (o el comando equivalente de tu proyecto) pasa sin errores tras los cambios.
- [ ] Contraste de `var(--text-muted)` (#8a8f98) sobre `var(--bg)` (#14161b) y sobre `var(--surface)` (#1d2027) — verifícalo con una herramienta de contraste (ej. WebAIM) si vas a usarlo en texto pequeño, para cumplir WCAG AA.
