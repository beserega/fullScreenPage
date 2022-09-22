(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (n) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  const n = document.querySelectorAll("[data-screen]"),
    t = document.querySelectorAll("[data-link]");
  !(function () {
    const e = document.querySelector("[data-burger]");
    e &&
      e.addEventListener("click", () => {
        document.documentElement.classList.toggle("menu-open");
      });
  })(),
    window.addEventListener("resize", function () {
      t.forEach((e) => {
        e.addEventListener("mouseenter", (e) => {
          e.preventDefault(),
            (function (e) {
              const t = document.getElementById(e);
              n.forEach((e) => {
                e.style.display = "none";
              }),
                (t.style.display = "block");
            })(e.target.dataset.link);
        }),
          e.addEventListener("click", (e) => {
            e.preventDefault(),
              document.documentElement.classList.remove("menu-open");
          });
      }),
        n.forEach((e) => {
          window.innerWidth > 768
            ? ((e.style.display = "none"),
              (n[0].style.display = "block"),
              e.addEventListener("click", () => {
                document.documentElement.classList.remove("menu-open");
              }))
            : (e.style.display = "block");
        });
    }),
    t.forEach((e) => {
      e.addEventListener("click", () => {
        window.innerWidth < 768 &&
          document.documentElement.classList.remove("menu-open");
      });
    }),
    (window.FLS = !0),
    (function (e) {
      let n = new Image();
      (n.onload = n.onerror =
        function () {
          e(2 == n.height);
        }),
        (n.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let n = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(n);
    });
})();
