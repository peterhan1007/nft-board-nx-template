const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  safelist: [
    {
      pattern: /./,
    },
  ],
  plugins: [require('daisyui')],
  theme: {
    screens: {
      sm: '1024px',
      md: '1280px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      fontSize: {
        '4.5xl': ['40px', '56px'],
      },
      fontFamily: {
        Inter: 'Inter',
        Drone: 'drone-ranger-pro',
      },
      colors: {
        'navigation-bg': '#17161A',
        'button-bg': 'linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)',
      },
    },
  },
  plugins: [],
};
