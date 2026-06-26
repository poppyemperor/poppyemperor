let currentSlide = 0;

function changeSlide(direction) {
  goToSlide(currentSlide + direction);
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  currentSlide = (n + slides.length) % slides.length;

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}
