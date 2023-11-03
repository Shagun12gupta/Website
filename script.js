// Get the slider and slide elements
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlideIndex = 0;

// Function to show a specific slide
function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
    currentSlideIndex = slideIndex;
}

// Show the initial slide
showSlide(currentSlideIndex);

// Function to go to the next slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Function to go to the previous slide
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

// Event listeners for the buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

  // Function to advance the carousel to the next slide
  function nextSlide() {
    $('#car1').carousel('next');
  }


  setInterval(nextSlide, 3000); 