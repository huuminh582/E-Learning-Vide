import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Section/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Background gradient palette (purple → pink)
        primary: {
          DEFAULT: '#990FFA',
          light: '#B44DFF',
          dark: '#7A0CC8',
          50: '#F5EAFE',
          100: '#E8D1FD',
          200: '#D1A3FB',
          500: '#990FFA',
          900: '#4A0775',
        },
        secondary: {
          DEFAULT: '#E60076',
          light: '#FF339A',
          dark: '#B8005E',
          50: '#FFF0F7',
          100: '#FFD6EA',
          500: '#E60076',
        },
        // Accent / highlight / CTA — warm orange-red
        accent: {
          DEFAULT: '#E5642E',
          light: '#F0845A',
          dark: '#BF3800',
          50: '#FEF3EE',
          100: '#FDDCCC',
          500: '#E5642E',
          600: '#DB5721',
          700: '#BF3800',
        },
        cta: {
          DEFAULT: '#DB5721', // orange-red for strong CTAs
          dark: '#BF3800',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          paper: '#FAFAFE',
          muted: '#F8F6FF',
        },
        text: {
          primary: '#111827',
          secondary: '#6B7280',
        },
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'primary-gradient': 'linear-gradient(135deg, #990FFA 0%, #E60076 100%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
