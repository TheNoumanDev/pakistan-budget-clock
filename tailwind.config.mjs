/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Dark theme base
        dark: {
          950: '#050506',
          900: '#0a0a0b',
          800: '#111113',
          700: '#1a1a1d',
          600: '#242428',
          500: '#2e2e33',
        },
        // Accent colors
        debt: {
          red: '#ef4444',
          muted: '#dc2626',
        },
        defence: {
          DEFAULT: '#94a3b8',
        },
        education: {
          green: '#22c55e',
        },
        health: {
          teal: '#14b8a6',
        },
        psdp: {
          green: '#84cc16',
        },
        nfc: {
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        urdu: ['Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'serif'],
      },
    },
  },
  plugins: [],
};
