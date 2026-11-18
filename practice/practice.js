
/* ======================================
   PRACTICE - FLOATING HEADER
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".interior-header");

    if (!header) return;

    let ticking = false;

    function updateHeader() {

        const scrollPosition = window.scrollY;
        const compact = header.classList.contains("is-compact");

        if (!compact && scrollPosition > 120) {
            header.classList.add("is-compact");
        } else if (compact && scrollPosition < 30) {
            header.classList.remove("is-compact");
        }

        ticking = false;
    }

    window.addEventListener("scroll", function () {

        if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateHeader);
        }

    }, { passive: true });

    updateHeader();

});
