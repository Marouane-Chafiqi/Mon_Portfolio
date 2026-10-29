/** @type {import('tailwindcss').Config} */
// Les couleurs sont dans src/index.css (variables --navy, --gold ...) : on les change là-bas.
const c = (v) => `rgb(var(${v}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: c("--navy"), 2: c("--navy-2"), 3: c("--navy-3") },
        paper: { DEFAULT: c("--paper"), 2: c("--paper-2") },
        gold: { DEFAULT: c("--gold"), dark: c("--gold-dark") },
        ink: c("--ink"),
        background: c("--paper"),
        foreground: c("--ink"),
        muted: { DEFAULT: c("--paper-2"), foreground: c("--muted") },
        border: "rgb(var(--navy) / 0.3)",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
