document.querySelectorAll(".site-search").forEach((form) => {
  const toggle = form.querySelector(".search-toggle");
  const input = form.querySelector('input[type="search"]');
  const status = form.querySelector(".search-status");

  if (!(toggle instanceof HTMLButtonElement)
      || !(input instanceof HTMLInputElement)
      || !(status instanceof HTMLElement)) return;

  const closeSearch = () => {
    form.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open search");
    status.textContent = "";
  };

  toggle.addEventListener("click", () => {
    const isOpen = form.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close search" : "Open search");
    if (isOpen) input.focus();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value.trim();

    if (!query) {
      status.textContent = "Enter a search term.";
      input.focus();
      return;
    }

    status.textContent = window.find(query, false, false, true)
      ? `Found “${query}”.`
      : `No matches found for “${query}”.`;
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSearch();
      toggle.focus();
    }
  });
});
