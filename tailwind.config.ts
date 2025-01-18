import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      colors: {
        background: '#EAEEFE',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0.5rem',
        lg: '4rem',
        xl: '1rem',
        '2xl': '1rem',
      },
      screens: {
        DEFAULT: '100%',
        sm: '1050px',
        md: '1068px',
        lg: '1190px',
        xl: '1340px',
      },
    },
  },
  plugins: [],
} satisfies Config
