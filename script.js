// intro text animation
document.addEventListener("DOMContentLoaded", function () {
  const textWrapJUNYONG = document.getElementById("textWrapJUNYONG");
  const textWrapPortfolio = document.getElementById("textWrapPortfolio");

  const lettersJUNYONG = textWrapJUNYONG.querySelectorAll(".letter");
  const lettersPortfolio = textWrapPortfolio.querySelectorAll(".letter");

  animateLettersWithDelay(lettersJUNYONG, 0);
  setTimeout(() => {
    animateLettersWithDelay(lettersPortfolio, 500);
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
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    depth: 200,
    slideShadows: true,
  },
  mousewheel: true,
  keyboard: true,
});

AOS.init({
  duration: 1200,
});
