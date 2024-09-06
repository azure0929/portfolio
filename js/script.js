document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.querySelector(".container");
  const textWrapJUNYONG = document.getElementById("textWrapJUNYONG");
  const lettersJUNYONG = textWrapJUNYONG.querySelectorAll(".letter");
  const spans = document.querySelectorAll(".about .inner .info span");
  const links = document.querySelectorAll(".link li");

  // 애니메이션이 끝난 후 로딩 화면을 숨기고 메인 콘텐츠를 부드럽게 나타나도록 설정
  setTimeout(() => {
    // 로딩 애니메이션이 끝나면 fade-out 애니메이션 시작
    animateLettersOut(lettersJUNYONG);

    setTimeout(() => {
      loadingScreen.style.transform = "translateY(0)";
      setTimeout(() => {
        loadingScreen.style.transform = "translateY(100%)";
        mainContent.style.display = "block";
        mainContent.style.opacity = "1";
      }, 500); // fade-out 애니메이션이 끝난 후 1초 대기
    }, 1000); // fade-out 애니메이션 시간
  }, 2000); // 로딩 애니메이션의 시간

  // letter - loading 텍스트 애니메이션
  animateLettersWithDelay(lettersJUNYONG, 0);

  function animateLettersWithDelay(letters, delay) {
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("fade-in");
      }, index * 150 + delay); // 글자마다 지연을 두어 순차적으로 나타나게 함
    });
  }

  // leter - 각 글자가 아래로 사라지도록 애니메이션을 추가
  function animateLettersOut(letters) {
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("fade-out");
      }, index * 100); // 글자마다 지연을 두어 순차적으로 사라지게 함
    });
  }

  // letter - 문서 클릭 시 애니메이션을 리셋
  document.addEventListener("click", function () {
    resetAnimation(lettersJUNYONG);
  });

  // letter - 애니메이션 상태를 리셋하여 다시 실행
  function resetAnimation(letters) {
    letters.forEach((letter) => {
      letter.classList.remove("fade-in", "fade-out"); // 현재 애니메이션 클래스를 제거
      void letter.offsetWidth; // 강제 리플로우를 발생시켜 스타일 재계산을 트리거
      letter.classList.add("fade-in"); // 애니메이션을 다시 적용
    });
  }

  // .about span - 글자 효과
  function handleScroll() {
    const viewportHeight = window.innerHeight;

    // 스팬 요소에 scrolled 클래스 적용
    spans.forEach((span) => {
      spans[0].classList.add("scrolled");
      const rect = span.getBoundingClientRect();
      const spanTop = rect.top + window.scrollY;
      const spanBottom = rect.bottom + window.scrollY;

      const isVisible =
        spanTop < window.scrollY + viewportHeight * 0.5 &&
        spanBottom > window.scrollY + 30;

      if (isVisible) {
        span.classList.add("scrolled");
      } else {
        span.classList.remove("scrolled");
      }
    });
  }

  // AOS 초기화
  AOS.init();

  // 스크롤 이벤트 리스너 추가
  window.addEventListener("scroll", handleScroll);
  // 페이지 로드 시 초기 스크롤 상태 확인
  handleScroll();

  // header .link - 클릭 이벤트
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // 마우스 커서 이벤트
  document.addEventListener("mousemove", function (e) {
    const smallCursor = document.querySelector(".cursor-small");

    // 커서 위치 업데이트
    const offsetX = -20;
    const offsetY = -20;
    // 커서 부드럽게
    smallCursor.style.transform = `translate(${e.clientX + offsetX}px, ${
      e.clientY + offsetY
    }px)`;
  });
  // 마우스 커서를 올리거나 올리지 않을 때 컬러 적용 유무
  spans.forEach((span) => {
    span.addEventListener("mouseenter", function () {
      span.classList.add("hovered");
    });

    span.addEventListener("mouseleave", function () {
      span.classList.remove("hovered");
    });
  });
});
