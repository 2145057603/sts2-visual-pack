/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 使用 RGB 元组格式，支持 Tailwind 透明度修饰符（如 bg-surface-900/90）
        surface: {
          900: 'rgb(var(--surface-900) / <alpha-value>)',
          800: 'rgb(var(--surface-800) / <alpha-value>)',
          700: 'rgb(var(--surface-700) / <alpha-value>)',
          600: 'rgb(var(--surface-600) / <alpha-value>)',
          500: 'rgb(var(--surface-500) / <alpha-value>)',
        },
        primary: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        accent: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans SC"',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      borderRadius: {
        card: '0.75rem',
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(0,0,0,0.4), 0 1px 4px 0 rgba(0,0,0,0.2)',
        'card-hover': '0 8px 32px 0 rgba(99,102,241,0.25), 0 2px 8px 0 rgba(0,0,0,0.3)',
        'accent-glow': '0 0 16px 2px rgba(251,191,36,0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
