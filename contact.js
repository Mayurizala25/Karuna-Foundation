const contactMenuButton = document.querySelector(".menu-toggle");
const contactNav = document.querySelector(".nav-links");

const closeContactMenu = () => {
  contactNav?.classList.remove("open");
  contactMenuButton?.setAttribute("aria-expanded", "false");
  contactMenuButton?.setAttribute("aria-label", "Open menu");
};

contactMenuButton?.addEventListener("click", () => {
  const isOpen = contactNav.classList.toggle("open");
  contactMenuButton.setAttribute("aria-expanded", String(isOpen));
  contactMenuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

contactNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeContactMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeContactMenu();
});

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  window.saveFoundationForm(event.currentTarget, event, document.querySelector("#contact-status"));
});
