document.addEventListener("DOMContentLoaded", function () {
  // intro text animation
  const textWrapJUNYONG = document.getElementById("textWrapJUNYONG");

  const lettersJUNYONG = textWrapJUNYONG.querySelectorAll(".letter");

  animateLettersWithDelay(lettersJUNYONG, 0);

  function animateLettersWithDelay(letters, delay) {
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("animate-in");
      }, index * 100 + delay);
    });
  }

  document.addEventListener("click", function () {
    resetAnimation(lettersJUNYONG);
  });

  function resetAnimation(letters) {
    letters.forEach((letter) => {
      letter.classList.remove("animate-in");
      void letter.offsetWidth;
      letter.classList.add("animate-in");
    });
  }
});

AOS.init({
  duration: 1200,
});
