(() => {
  const storageKey = "karunaFoundationFormSubmissions";

  window.saveFoundationForm = (form, event, status) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const fields = [...new FormData(form).entries()]
      .filter(([name, value]) => typeof value === "string" && name !== "donor-type")
      .map(([name, value]) => [name, value.trim()]);
    const record = {
      form: form.id || "website-form",
      submittedAt: new Date().toISOString(),
      donorType: form.querySelector('input[name="donor-type"]:checked')?.value || null,
      fields: Object.fromEntries(fields)
    };

    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (!Array.isArray(saved)) throw new Error("Saved form data is not a list.");
      saved.push(record);
      localStorage.setItem(storageKey, JSON.stringify(saved));
    } catch (error) {
      console.error("Unable to save form data in this browser.", error);
      status.textContent = "We couldn’t save your data in this browser. Please contact info@animalhelpline.in or call +91 98984 99954.";
      return;
    }

    const message = document.createElement("strong");
    message.textContent = "Thank you! Your data has been submitted successfully. Our team will contact you soon.";
    const savedNotice = document.createElement("span");
    savedNotice.textContent = "This information is saved only in this browser and has not been sent to the foundation.";
    const contact = document.createElement("span");
    contact.append("Contact us: ");
    const phone = document.createElement("a");
    phone.href = "tel:+919898499954";
    phone.textContent = "+91 98984 99954";
    const email = document.createElement("a");
    email.href = "mailto:info@animalhelpline.in";
    email.textContent = "info@animalhelpline.in";
    contact.append(phone, " · ", email);

    status.replaceChildren(message, savedNotice, contact);
    status.classList.add("submission-success");
    status.scrollIntoView({ behavior: "smooth", block: "nearest" });

    if ([...form.querySelectorAll('input[type="file"]')].some((input) => input.files.length)) {
      const fileNotice = document.createElement("span");
      fileNotice.textContent = "Uploaded files are not saved. Please email any required resume or photo to info@animalhelpline.in.";
      status.append(fileNotice);
    }
  };
})();
