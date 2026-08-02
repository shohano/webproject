/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bcd9ff',
          300: '#8ec1ff',
          400: '#599dff',
          500: '#337bff',
          600: '#1c5cf5',
          700: '#1547e1',
          800: '#183bb6',
          900: '#1a378f',
          950: '#152357',
        },
        accent: {
          50: '#ecfdf9',
          100: '#d0fbef',
          200: '#a4f5dd',
          300: '#6ceac6',
          400: '#33d6a8',
          500: '#14bd8f',
          600: '#089a74',
          700: '#077a5f',
          800: '#0a604d',
          900: '#0c4f40',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b0b9c9',
          400: '#8593aa',
          500: '#66758f',
          600: '#515e76',
          700: '#434d60',
          800: '#3a4251',
          900: '#0b1220',
          950: '#060a14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(11, 18, 32, 0.18)',
        glow: '0 0 0 1px rgba(51,123,255,0.18), 0 18px 50px -12px rgba(28,92,245,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
      },
    },
  },
  plugins: [],
};
