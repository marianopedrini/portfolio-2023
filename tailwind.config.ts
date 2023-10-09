import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
        'white': '#E8E8E8',
        'ultrablack': '#000000',
        'black': '#101010',
        'grey': '#989898',
        'darkgrey': '#5E5E5E',
        'darknessgrey': '#212121',
    },
    container: {
      // container centered
      center: true,
      // horizontal padding
      padding: '20px',
      // default breakpoints
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
        animation: {
            bounce: 'bounce 1.5s infinite'
        }
    }
  },
  plugins: [],
}
export default config
