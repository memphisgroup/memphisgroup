import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: '#F5A623',
          deep: '#D4AF37',
          light: '#F7C36A',
          muted: 'rgba(245, 166, 35, 0.15)',
        },
        carbon: {
          DEFAULT: '#1A1A1A',
          dark: '#0A0A0A',
          mid: '#2D2D2D',
        },
        gray: {
          dark: '#2D2D2D',
          mid: '#6B6B6B',
          light: '#A3A3A3',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5A623 0%, #D4AF37 100%)',
        'gold-gradient-radial': 'radial-gradient(ellipse at top right, rgba(245, 166, 35, 0.15) 0%, transparent 60%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(245, 166, 35, 0.25)',
        'gold-glow-sm': '0 0 20px rgba(245, 166, 35, 0.15)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 48px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
