document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("navMenu");

  if (!hamburger || !nav) return;

  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");

    // 🔒 bloquea scroll cuando abre menú
    document.body.style.overflow =
      nav.classList.contains("active") ? "hidden" : "";
  };

  hamburger.addEventListener("click", toggleMenu);

  // 🔥 cerrar al click en links (UX pro)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // ESC key close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

});