const careerMenuButton = document.querySelector(".menu-toggle");
const careerNav = document.querySelector(".nav-links");

careerMenuButton?.addEventListener("click", () => {
  const isOpen = careerNav.classList.toggle("open");
  careerMenuButton.setAttribute("aria-expanded", String(isOpen));
  careerMenuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

careerNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    careerNav.classList.remove("open");
    careerMenuButton?.setAttribute("aria-expanded", "false");
    careerMenuButton?.setAttribute("aria-label", "Open menu");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    careerNav?.classList.remove("open");
    careerMenuButton?.setAttribute("aria-expanded", "false");
    careerMenuButton?.setAttribute("aria-label", "Open menu");
  }
});

document.querySelector("#career-form")?.addEventListener("submit", (event) => {
  window.saveFoundationForm(event.currentTarget, event, document.querySelector("#career-status"));
});

document.querySelector("#career-contact")?.addEventListener("submit", (event) => {
  window.saveFoundationForm(event.currentTarget, event, document.querySelector("#contact-status"));
});
