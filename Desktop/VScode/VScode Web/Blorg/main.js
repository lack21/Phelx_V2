// lear
// Blorg Landing Page

window.addEventListener("DOMContentLoaded", () => {
  const normalLinks = document.querySelectorAll(".normal-link");
  const linkArrows = document.querySelectorAll(".arrow");
  const linkOptions = document.querySelectorAll(".link-options");

  const linksBtn = document.querySelector(".links-btn");
  const linksSection = document.querySelector(".link-section");

  normalLinks.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (item.className.includes("active")) {
        item.classList.remove("active");
        linkArrows[index].classList.remove("active");
        linkOptions[index].classList.remove("active");
      } else {
        normalLinks.forEach((item) => item.classList.remove("active"));
        linkArrows.forEach((item) => item.classList.remove("active"));
        linkOptions.forEach((item) => item.classList.remove("active"));

        item.classList.add("active");
        linkArrows[index].classList.add("active");
        linkOptions[index].classList.add("active");
      }
    });
  });

  linksBtn.addEventListener("click", () => {
    linksBtn.src =
      linksBtn.src.slice(linksBtn.src.length - 5, linksBtn.src.length - 4) ==
      "r"
        ? "images/icon-close.svg"
        : "images/icon-hamburger.svg";
    linksSection.classList.toggle("active");
  });
});
