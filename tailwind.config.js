/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'img-departamento': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906191/Projects/unne/img/Invertir/UNIDADES_NUEVAS__DEPARTAMENTO_ffxlui.webp')",
        'img-estacionamiento': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906035/Projects/unne/img/Invertir/UNIDADES_NUEVAS__ESTACIONAMIENTO_ag2mc7.webp')",
        'img-bodega': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906185/Projects/unne/img/Invertir/UNIDADES_NUEVAS__BODEGA_oxyv3r.webp')",
      },
      colors: {
        primary: {
          DEFAULT: '#E85512',
          opacity: '#E85512D4',
          ligth: '#FFF7ED',
          300: '#FDBA74',
          400: '#fb923C',
        },
        secondary: {
          DEFAULT: '#FABA16',
          opacity: '#FABA16D4',
          ligth: '#FEF3C7',
          300: '#FCD34D',
          400: '#FACC15',
        },
        tertiary: {
          DEFAULT: '#353843',
          opacity: '#353843D4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
