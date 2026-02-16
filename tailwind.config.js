/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./*.js",
    "./**/*.js"
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  safelist: [
    "hidden",
    "opacity-80",
    "bg-slate-50",
    "border-slate-200",
    "text-slate-600",
    "text-slate-700",
    "text-slate-900"
  ]
};

