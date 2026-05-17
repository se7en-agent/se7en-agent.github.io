document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll("[data-reveal]");

if (
  "IntersectionObserver" in window &&
  revealItems.length &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  revealItems.forEach((item) => item.classList.add("is-visible"));

  requestAnimationFrame(() => {
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.01 },
    );

    revealItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        item.classList.add("is-visible");
      } else {
        item.classList.remove("is-visible");
        observer.observe(item);
      }
    });
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
