// Oddiy JS animatsiya: sahifa ochilganda matn paydo bo‘lishi
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-content");
  hero.style.opacity = 0;
  hero.style.transform = "translateY(30px)";
  setTimeout(() => {
    hero.style.transition = "all 1s ease";
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  }, 200);
});
