module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        normal: '.4rem .4rem 1rem #ccc, -.4rem -.4rem 1rem #fff',
        hover: '.4rem .4rem 1rem #ccc inset, -.4rem -.4rem 1rem #fff inset',
        open: '0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1)',
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
