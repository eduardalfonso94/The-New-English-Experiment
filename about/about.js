
/* ==========================================
   ABOUT US - MINIMALIST ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".about-introduction-content, " +
        ".about-section-heading, " +
        ".approach-item, " +
        ".about-purpose-intro, " +
        ".purpose-item, " +
        ".about-final"
    );

    if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        return;
    }

    elements.forEach(element => {
        element.classList.add("reveal-ready");
    });

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));

});
