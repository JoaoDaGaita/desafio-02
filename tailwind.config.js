/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        product: {
          yellowDark: '#C47F17',
          yellow: '#DBAC2C',
          yellowLight: '#F1E9C9',
          purpleDark: '#4B2995',
          purple: '#8047F8',
          purpleLight: '#EBE5F9',
        },
        base: {
          title: '#272221',
          subtitle: '#403937',
          text: '#474F4D',
          label: '#8D8686',
          hover: '#D7D5D5',
          button: '#E6E5E5',
          input: '#EDEDED',
          card: '#F3F2F2',
          background: '#FAFAFA',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        Baloo2: ['Baloo 2'],
      },
    },
  },
  plugins: [],
}
