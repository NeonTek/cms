// TOGGLE SECTIONS

document.addEventListener("DOMContentLoaded", (e) => {
  // Get the navlinks
  const links = document.querySelectorAll(".link");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      changeLinkColor();
      e.preventDefault();

      const targetSectionId = e.target.getAttribute("data-section");
      console.log(`Target Section: ${targetSectionId}`);

      document.querySelectorAll(".section").forEach((section) => {
        section.classList.remove("active_sect");

        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
          section.classList.add("active_sect");
          e.target.style.color = "red";
        }
      });
    });
  });

  function changeLinkColor() {
    links.forEach((link) => {
      link.style.color = "#0d6efd";
    });
  }
});
