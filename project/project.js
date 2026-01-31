document.addEventListener("DOMContentLoaded", () => {
  const frontLayer = document.querySelector(".front-layer");
  const bgImg = document.querySelector(".parallax-bg img");

  if (!frontLayer || !bgImg) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // layer depan naik (kebuka)
    frontLayer.style.transform = `translateY(${-scrollY}px)`;

    // background gerak pelan
    bgImg.style.transform = `translateY(${scrollY * 0.25}px)`;
  });
});
