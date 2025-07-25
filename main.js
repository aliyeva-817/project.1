const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevBtn = document.querySelector('.arrow.prev');
const nextBtn = document.querySelector('.arrow.next');

let currentIndex = 0;

function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width + 10; 

  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;


  items.forEach((item, index) => {
    if(index === currentIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}


nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();
