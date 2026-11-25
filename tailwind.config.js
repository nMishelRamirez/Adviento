/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        welcome: {
          ink: '#4b2b2f',
          red: '#7a263d',
          'red-dark': '#641d31',
          muted: '#9b7c76',
          gold: '#b98f58',
          line: '#eadfd2',
          paper: '#fffdf8',
          'paper-dark': '#e5d8c5',
          envelope: '#e6d5b8',
          'envelope-light': '#f0e3cd',
          pine: '#61725d',
        },
        christmas: {
          red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#dc2626',
            600: '#b91c1c',
            700: '#991b1b',
            800: '#7f1d1d',
            900: '#5b0f0f',
            950: '#3f0808',
          },
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f5c542',
            600: '#d4a017',
            700: '#a87b12',
            800: '#7c5a0e',
            900: '#523908',
          },
          cream: '#fff8f0',
          pine: {
            400: '#2d6a4f',
            500: '#1b4332',
            600: '#143a2c',
          },
        },
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-110vh) translateX(20px)', opacity: '0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,197,66,0.4), 0 0 40px rgba(245,197,66,0.15)' },
          '50%': { boxShadow: '0 0 35px rgba(245,197,66,0.7), 0 0 70px rgba(245,197,66,0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(220,38,38,0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(220,38,38,0)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.15)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.12)' },
          '60%': { transform: 'scale(1)' },
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        scaleIn: 'scaleIn 0.5s ease-out forwards',
        pulseRed: 'pulseRed 2s infinite',
        heartbeat: 'heartbeat 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
