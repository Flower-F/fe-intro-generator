export const getSliderSettings = (length: number) => {
  return {
    arrows: false,
    slidesToShow: Math.min(length, 3),
    focusOnselect: false,
    accessability: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(length, 2),
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: Math.min(length, 1),
        },
      },
    ],
  };
};
