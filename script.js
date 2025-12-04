// =============================
// Hero Slider Auto
// =============================
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(-${index * 100}vw)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 4000); // 4 seconds per slide

// =============================
// Scroll Animation
// =============================
const sections = document.querySelectorAll(".about, .menu, .catalog, .gallery, .order-form, .contact-form");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) {
      section.classList.add("scrolled");
    }
  });
});

// =============================
// Form Success Message
// =============================
const forms = document.querySelectorAll("form");

forms.forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const successMsg = form.querySelector(".success-message");
    successMsg.style.display = "block";
    setTimeout(() => {
      successMsg.style.opacity = 1;
    }, 50);
    form.reset();
  });
});
