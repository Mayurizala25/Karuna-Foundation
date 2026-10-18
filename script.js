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

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
const counters = document.querySelectorAll("[data-count]");
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.count);
    const duration = 900;
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = target === 1.4 ? (target * progress).toFixed(1) : Math.floor(target * progress);
      element.textContent = value;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
    observer.unobserve(element);
  });
}, { threshold: 0.4 });
counters.forEach((counter) => counterObserver.observe(counter));

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      const originalText = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => { button.textContent = originalText; }, 2200);
    } catch {
      button.textContent = "Copy unavailable — select the details";
    }
  });
});

const donorTypeInputs = document.querySelectorAll('input[name="donor-type"]');
const paymentCards = document.querySelectorAll("[data-payment]");
donorTypeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    paymentCards.forEach((card) => {
      card.hidden = card.dataset.payment !== input.value;
    });
  });
});

const amountInput = document.querySelector("#donation-amount");
const amountButtons = document.querySelectorAll("[data-amount]");
amountButtons.forEach((button) => {
  button.addEventListener("click", () => {
    amountInput.value = button.dataset.amount;
    amountButtons.forEach((option) => option.classList.toggle("selected", option === button));
    if (button.dataset.amount === "") amountInput.focus();
  });
});
amountInput?.addEventListener("input", () => {
  amountButtons.forEach((button) => button.classList.toggle("selected", button.dataset.amount !== "" && button.dataset.amount === amountInput.value));
});

document.querySelector("#donor-form")?.addEventListener("submit", (event) => {
  const form = event.currentTarget;
  window.saveFoundationForm(form, event, document.querySelector("#donor-form-status"));
});
