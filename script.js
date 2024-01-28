// intro text animation
document.addEventListener("DOMContentLoaded", function () {
  const textWrapJUNYONG = document.getElementById("textWrapJUNYONG");
  const textWrapWeb = document.getElementById("textWrapWeb");
  const textWrapPublisher = document.getElementById("textWrapPublisher");
  const textWrapPortfolio = document.getElementById("textWrapPortfolio");

  const lettersJUNYONG = textWrapJUNYONG.querySelectorAll(".letter");
  const lettersWeb = textWrapWeb.querySelectorAll(".letter");
  const lettersPublisher = textWrapPublisher.querySelectorAll(".letter");
  const lettersPortfolio = textWrapPortfolio.querySelectorAll(".letter");

  animateLettersWithDelay(lettersJUNYONG, 0);
  setTimeout(() => {
    animateLettersWithDelay(lettersWeb, 0);
    animateLettersWithDelay(lettersPublisher, 500);
    animateLettersWithDelay(lettersPortfolio, 1500);
  }, 1000);

  function animateLettersWithDelay(letters, delay) {
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("animate-in");
      }, index * 100 + delay);
    });
  }

  document.addEventListener("click", function () {
    resetAnimation(lettersJUNYONG);
    resetAnimation(lettersWeb);
    resetAnimation(lettersPublisher);
    resetAnimation(lettersPortfolio);
  });

  function resetAnimation(letters) {
    letters.forEach((letter) => {
      letter.classList.remove("animate-in");
      void letter.offsetWidth;
      letter.classList.add("animate-in");
    });
  }
});

// swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "3",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 40,
    depth: 100,
    slideShadows: true,
  },
  mousewheel: true,
});

// gsap
const horizontal = document.querySelector("#horizontal");
const sections = gsap.utils.toArray("#horizontal > section");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: horizontal,
    start: "top top",
    end: () => "+=" + (horizontal.offsetWidth - innerWidth),
    pin: true,
    ainicipatePin: 1,
    scrub: 1,
    invalidateOnRefresh: true,
  },
});

AOS.init({
  duration: 1200,
});
