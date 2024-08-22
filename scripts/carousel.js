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

const carousel2 = document.getElementById('carousel2');
const nextButton2 = document.getElementById('next2');
const prevButton2 = document.getElementById('prev2');

nextButton2.addEventListener('click', () => {
  index = (index + 1) % carousel2.children.length;
  carousel2.style.transform = `translateX(-${index * 100}%)`;
});

prevButton2.addEventListener('click', () => {
  index = (index - 1 + carousel2.children.length) % carousel2.children.length;
  carousel2.style.transform = `translateX(-${index * 100}%)`;
});