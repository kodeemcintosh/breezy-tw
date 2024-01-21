import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.65rem',
      },
      colors: {
        "badge-gray": "#6B7280",
        "badge-red": "#F87171",
        "badge-yellow": "#FBBF24",
        "badge-green": "#34D399",
        "badge-blue": "#60A5FA",
        "badge-purple": "#A78BFA",
        "badge-pink": "#F472B6",
      },
      animation: {
        'spin-fast': 'spin .6s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config