/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f2f7fe',
          100: '#e5eefc',
          300: '#7ba7ec',
          400: '#3b82f6',
          500: '#1656C4',
          600: '#1656C4',
          700: '#1146a3',
          800: '#0f3d91',
          900: '#0b2e6b',
        },
        royal: '#1656C4',
        ink: { DEFAULT: '#0e1b33', 2: '#334155' },
        muted: '#64748b',
        line: '#e6ecf5',
        soft: '#f6f9fe',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        heading: ['Poppins', '"Plus Jakarta Sans"', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '20px',
        xl3: '28px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(11,46,107,.06)',
        sm2: '0 4px 14px rgba(11,46,107,.07)',
        card: '0 12px 34px rgba(11,46,107,.10)',
        lg2: '0 26px 60px rgba(11,46,107,.16)',
        blue: '0 16px 40px rgba(22,86,196,.28)',
      },
      maxWidth: {
        container: '1200px',
        wide: '1360px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(.16,1,.3,1)',
      },
      keyframes: {
        float1: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-26px)' } },
        float2: { '0%,100%': { transform: 'translateY(0) translateX(0)' }, '50%': { transform: 'translateY(20px) translateX(-14px)' } },
        scrollDot: { '0%': { opacity: 0, transform: 'translate(-50%,0)' }, '40%': { opacity: 1 }, '80%': { opacity: 0, transform: 'translate(-50%,12px)' } },
        plpulse: { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.08)' } },
      },
      animation: {
        float1: 'float1 9s ease-in-out infinite',
        float2: 'float2 7s ease-in-out infinite',
        float3: 'float1 11s ease-in-out infinite',
        scrollDot: 'scrollDot 1.8s infinite',
        plpulse: 'plpulse 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
