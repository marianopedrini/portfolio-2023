import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
        'white': '#E8E8E8',
        'black': '#101010',
        'grey': '#989898',
    },
    container: {
      // container centered
      center: true,
      // orizontal padding
      padding: '20px',
      // default breakpoints
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
}
export default config
