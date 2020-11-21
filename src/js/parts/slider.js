const slider = () => {
  const slides = document.querySelectorAll(".modal-work__preview--photo"),
    dotsWrap = document.querySelector(".modal-work__dots"),
    dots = document.querySelectorAll(".dot");

  let slideIndex = 1;
  showSlides(slideIndex);
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    dots.forEach((item) => {
      item.classList.remove("dot-active");
    });
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  dotsWrap.addEventListener("click", function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (
        event.target.classList.contains("dot") &&
        event.target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  });
};
export default slider;
