document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // Simple contact form interaction
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const submitButton = contactForm.querySelector("button[type='submit']");

      if (submitButton) {
        submitButton.textContent = "Message Sent";
        submitButton.disabled = true;

        setTimeout(() => {
          submitButton.textContent = "Send";
          submitButton.disabled = false;
          contactForm.reset();
        }, 1800);
      }
    });
  }
});

