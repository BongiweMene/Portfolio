/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A0A0B',
          card: '#131316',
          border: '#1F1F23',
          muted: '#8B8B93',
          pink: '#FF4FA3',
          'pink-soft': '#FFB3D1',
          'pink-neon': '#FF1E8E',
          white: '#F5F5F7',
        },
      },
      fontFamily: {
        display: ['"SF Pro Display"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"SF Pro Text"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'pink-gradient': 'linear-gradient(135deg, #FF4FA3 0%, #FF1E8E 100%)',
      },
      boxShadow: {
        'pink-sm': '0 0 12px rgba(255, 79, 163, 0.25)',
        'pink-md': '0 0 24px rgba(255, 79, 163, 0.35)',
        'card-dark': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float-soft': 'floatSoft 6s ease-in-out infinite',
      },
      keyframes: {
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
