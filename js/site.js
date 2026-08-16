(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const yearEl = document.getElementById("year");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("site-nav--open", !expanded);
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
})();
