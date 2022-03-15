module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        normal: '.4rem .4rem 1rem #ccc, -.4rem -.4rem 1rem #fff',
        hover: '.4rem .4rem 1rem #ccc inset, -.4rem -.4rem 1rem #fff inset',
      },
      keyframes: {
        main: {
          from: {
            transform: 'rotate(0)',
          },
          to: {
            transform:
              'perspective(1300px) rotateZ(0deg) translateZ(310px) scale(0.5)',
          },
        },
      },
    },
  },
  plugins: [],
};
