(() => {
  const button = document.querySelector(".whatsapp-float");
  if (!button) return;

  let frame = 0;
  const updateVisibility = () => {
    frame = 0;
    const buttonRect = button.getBoundingClientRect();
    const controls = document.querySelectorAll(
      "form input, form textarea, form select, form button, form [role='status'], .site-footer-call, .site-footer-copyright, main h1, main h2, main h3, main p, main li, main blockquote, main figcaption"
    );
    const overlaps = [...controls].some((control) => {
      if (!control.getClientRects().length) return false;
      const rect = control.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0 &&
        rect.left < buttonRect.right && rect.right > buttonRect.left &&
        rect.top < buttonRect.bottom && rect.bottom > buttonRect.top;
    });
    if (button.hidden !== overlaps) button.hidden = overlaps;
  };
  const scheduleUpdate = () => {
    if (!frame) frame = requestAnimationFrame(updateVisibility);
  };

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  document.addEventListener("focusin", scheduleUpdate);
  document.addEventListener("focusout", scheduleUpdate);
  new MutationObserver(scheduleUpdate).observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ["class", "hidden", "style"]
  });
  updateVisibility();
})();
