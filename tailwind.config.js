/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // This allows you to use 'bg-btn' or 'text-btn'
        btn: 'rgb(var(--button) / <alpha-value>)',
        'btn-hover': 'rgb(var(--button-hover) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
