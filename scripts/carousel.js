const carousel = document.getElementById('carousel');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let index = 0;

nextButton.addEventListener('click', () => {
  index = (index + 1) % carousel.children.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

prevButton.addEventListener('click', () => {
  index = (index - 1 + carousel.children.length) % carousel.children.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});
