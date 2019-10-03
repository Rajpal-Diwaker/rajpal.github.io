var introTextSliderId = setInterval(() => {
  const textSlides = 3;
  const slider = document.getElementById("text-slider");
  if (!slider) return;
  const slides = slider.children;
  if (slides.length !== textSlides) return;
  let currentSlide = 0;
  setInterval(() => {
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slides[currentSlide].style.display = "block";
    currentSlide = (currentSlide + 1) % 3;
  }, 2500);
  clearInterval(introTextSliderId);
}, 100);
