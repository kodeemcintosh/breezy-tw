
export default {
  // mode: 'jit',
  content: [
    './lib/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // safelist: [
  //   {
  //     pattern: /^(.*?)/,
  //   },
  // ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        pastel: {
          gray: "#6B7280",
          red: "#f87171",
          yellow: "#FBBF24",
          green: "#34D399",
          blue: "#60A5FA",
          purple: "#A78BFA",
          pink: "#F472B6",
        },
      },

      fontSize: {
        '2xs': '.65rem',
      },
      animation: {
        'spin-fast': 'spin .6s linear infinite',
      },
    },
  },
  plugins: [],
}