import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF7FF',
          100: '#D9EDFF',
          200: '#BCE0FF',
          300: '#8ECCFF',
          400: '#59AEFF',
          500: '#338AFF',
          600: '#1A68F5',
          700: '#1454E1',
          800: '#1744B6',
          900: '#193C8F',
          950: '#0A1628',
        },
        accent: {
          50: '#EFFFFE',
          100: '#C7FFFE',
          200: '#90FFFD',
          300: '#51F7F5',
          400: '#1DE4E6',
          500: '#00C8CC',
          600: '#00A0A9',
          700: '#028088',
          800: '#08656E',
          900: '#0C545B',
          950: '#00353C',
        },
        navy: {
          50: '#F3F6FC',
          100: '#E6EDF8',
          200: '#C7D9F0',
          300: '#95BAE4',
          400: '#5D95D4',
          500: '#3977BF',
          600: '#295DA0',
          700: '#234B82',
          800: '#21416C',
          900: '#20385A',
          950: '#0A1628',
        },
        surface: {
          50: '#FAFBFC',
          100: '#F4F6F8',
          200: '#E9ECF0',
          300: '#D5DAE1',
          400: '#B8C0CC',
          500: '#98A3B3',
          600: '#7D8A9D',
          700: '#6B7789',
          800: '#5A6472',
          900: '#4C545E',
          950: '#31363D',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(26, 104, 245, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(26, 104, 245, 0.8), 0 0 40px rgba(26, 104, 245, 0.4)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -15px rgba(0, 0, 0, 0.1)',
        'glow-primary': '0 0 30px rgba(26, 104, 245, 0.3)',
        'glow-accent': '0 0 30px rgba(0, 200, 204, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
  },
  plugins: [],
}

export default config
