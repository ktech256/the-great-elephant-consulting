import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0f0f10',
        graphite: '#1a1a1c',
        gold: {
          400: '#c9a227',
          500: '#d4af37',
          600: '#b68d2c'
        }
      },
      boxShadow: {
        gold: '0 0 30px rgba(212, 175, 55, 0.28)'
      },
      backgroundImage: {
        'gold-metallic': 'linear-gradient(135deg, #b68d2c 0%, #d4af37 35%, #f0d778 50%, #c9a227 70%, #8f6d1c 100%)'
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translateX(-5%) translateY(0%) scale(1)' },
          '50%': { transform: 'translateX(5%) translateY(-4%) scale(1.06)' }
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.45)' },
          '70%': { boxShadow: '0 0 0 14px rgba(212,175,55,0)' }
        }
      },
      animation: {
        aurora: 'aurora 16s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2.6s infinite'
      }
    }
  },
  plugins: []
};

export default config;
