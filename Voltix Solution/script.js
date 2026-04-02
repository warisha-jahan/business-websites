const slider = document.querySelector(".portfolio-images");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let scrollAmount = 0;
const slides = Array.from(slider.children);
const visibleSlides = 4;

// Clone first few slides for infinite effect
for (let i = 0; i < visibleSlides; i++) {
  slider.appendChild(slides[i].cloneNode(true));
}

// Get dynamic width including gap
const slideStyle = getComputedStyle(slides[0]);
const slideWidth = slides[0].offsetWidth + parseInt(slideStyle.marginRight);

const totalSlides = slider.children.length;
const maxScroll = (slides.length) * slideWidth; // original slides count

function moveRight() {
  scrollAmount += slideWidth;
  slider.style.transition = "transform 0.5s ease";
  slider.style.transform = `translateX(-${scrollAmount}px)`;

  // Reset instantly after last clone
  if (scrollAmount >= maxScroll) {
    setTimeout(() => {
      slider.style.transition = "none";
      scrollAmount = 0;
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }, 500); // match transition duration
  }
}

function moveLeft() {
  // If at start, jump to clones at end
  if (scrollAmount <= 0) {
    scrollAmount = maxScroll;
    slider.style.transition = "none";
    slider.style.transform = `translateX(-${scrollAmount}px)`;
    setTimeout(() => {
      scrollAmount -= slideWidth;
      slider.style.transition = "transform 0.5s ease";
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }, 20);
  } else {
    scrollAmount -= slideWidth;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
}

// Event listeners
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

// Auto scroll every 3 seconds
let autoSlide = setInterval(moveRight, 3000);

// Optional: pause on hover
slider.parentElement.addEventListener("mouseenter", () => clearInterval(autoSlide));
slider.parentElement.addEventListener("mouseleave", () => autoSlide = setInterval(moveRight, 3000));


// Testimonial
const testimonials = document.querySelectorAll('.testimonial');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => t.classList.remove('active'));
  testimonials[index].classList.add('active');
}

prev.addEventListener('click', () => {
  current = (current === 0) ? testimonials.length - 1 : current - 1;
  showTestimonial(current);
});

next.addEventListener('click', () => {
  current = (current === testimonials.length - 1) ? 0 : current + 1;
  showTestimonial(current);
});

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  next.click();
}, 8000);