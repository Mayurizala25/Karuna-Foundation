const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

const closeMenu = () => {
  nav?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Open menu");
};

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const volunteerForm = document.querySelector("#volunteer-form");
volunteerForm?.addEventListener("submit", (event) => {
  window.saveFoundationForm(volunteerForm, event, document.querySelector("#form-status"));
});
