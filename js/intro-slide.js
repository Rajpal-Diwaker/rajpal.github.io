window.addEventListener("load", () => {
  const slider = document.getElementById("text-slider");
  const slides = slider.children;
  let slide = 0;
  setInterval(() => {
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slides[slide].style.display = "block";
    slide = (slide + 1) % 3;
  }, 2500);
});
