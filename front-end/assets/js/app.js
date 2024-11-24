const posts = document.querySelectorAll(".post");

// post.addEventListener("click", () => {
//   navigateToEditPage();
// });

posts.forEach((post) => {
  post.addEventListener("click", () => {
    navigateToEditPage();
  });
});

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

  let touchStartX = 0;
  let touchEndX = 0;

  const sidebar = document.querySelector(".sidebar");
  const swipeArea = document.querySelector(".swipe-area");

  function handleSwipe() {
    if (touchEndX > touchStartX && touchEndX - touchStartX > 50) {
      // Swipe right
      sidebar.classList.add("active");
    }
  }

  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 767 &&
      !sidebar.contains(e.target) &&
      !swipeArea.contains(e.target)
    ) {
      sidebar.classList.remove("active");
    }
  });
});
