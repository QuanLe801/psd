import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white65: 'rgba(255, 255, 255, 0.65)',
      white: '#fff',
      gray: 'rgba(85, 85, 84, 0.70)',
      blue: '#006DF9',
      yellow: '#EBA820',
      black54: '#555554',
    },
    fontFamily: {
      anton: ['anton'],
      sans: ['San Francisco Display'],
    },
    extend: {
      // spacing: {
      //   '8xl': '96rem',
      //   '9xl': '128rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    },
  },
  plugins: [],
};
export default config;
