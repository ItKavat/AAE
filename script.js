document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var filterButtons = document.querySelectorAll(".gallery-filters button");
  var galleryItems = document.querySelectorAll("[data-category]");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var cat = btn.getAttribute("data-filter");
      galleryItems.forEach(function (item) {
        var show = cat === "all" || item.getAttribute("data-category") === cat;
        item.style.display = show ? "" : "none";
      });
    });
  });
});
