document.addEventListener("DOMContentLoaded", function () {
  const spans = document.querySelectorAll(".about .inner .info span");
  const links = document.querySelectorAll(".link li");

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

  // bar 클릭 이벤트
  const barBtn = document.querySelector(".bar");
  const sideBar = document.querySelector(".sidebar");
  const linkLis = document.querySelectorAll(".link li");

  // bar 버튼 클릭 시 사이드바 토글
  barBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    sideBar.classList.toggle("active");
  });

  // 모든 링크 항목 클릭 시 active 클래스 제거
  linkLis.forEach((li) => {
    li.addEventListener("click", function () {
      barBtn.classList.remove("active");
      sideBar.classList.remove("active");
    });
  });
});
