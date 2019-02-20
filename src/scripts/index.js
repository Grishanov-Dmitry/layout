import '../styles/index.scss';

console.log('webpack starterkit');

const statringSlider = () => {
  $('.slider').slick({
    nextArrow: '.slider_right_arrow',
    prevArrow: '.slider_left_arrow',
  });

  $('.slider_2').slick({
    nextArrow: '.right_arrow',
    prevArrow: '.left_arrow',
  });
};

document.addEventListener("DOMContentLoaded", statringSlider);
