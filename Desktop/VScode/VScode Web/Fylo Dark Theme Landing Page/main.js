// lear
// Fylo Dark Theme Landing Page

window.addEventListener("DOMContentLoaded", () => {
  const linksBtn = document.querySelector(".links-btn");
  const links = document.querySelector(".links");

  linksBtn.addEventListener("click", () => {
    links.classList.toggle("active");
    linksBtn.src =
      linksBtn.src.slice(linksBtn.src.length - 5, linksBtn.src.length - 4) ===
      "r"
        ? "images/icon-close.svg"
        : "images/icon-hamburger.svg";
  });
});
