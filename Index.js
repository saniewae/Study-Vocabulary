// Soft fade-in on load
document.addEventListener("DOMContentLoaded", () => {
  const home = document.querySelector(".home");
  home.style.opacity = "0";
  home.style.transform = "translateY(20px)";

  setTimeout(() => {
    home.style.transition = "all 0.8s ease";
    home.style.opacity = "1";
    home.style.transform = "translateY(0)";
  }, 150);
});
