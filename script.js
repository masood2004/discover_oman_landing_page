let currentIndex = 0;
const slides = document.querySelectorAll(".slider-container img");

function autoSlide() {
  const totalSlides = slides.length;

  slides.forEach((slide, index) => {
    slide.style.transition = "transform 0.8s ease-in-out"; // Smooth transition
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  currentIndex = (currentIndex + 1) % totalSlides;
}

setInterval(autoSlide, 3000);
