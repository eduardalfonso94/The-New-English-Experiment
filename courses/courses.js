/* ==========================================
   COURSES - FLOATING HEADER
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".courses-header");

    if (!header) return;

    let ticking = false;

    function updateHeader() {

        const scrollPosition = window.scrollY;
        const isCompact = header.classList.contains("is-compact");

        if (!isCompact && scrollPosition > 120) {
            header.classList.add("is-compact");
        }

        else if (isCompact && scrollPosition < 30) {
            header.classList.remove("is-compact");
        }

        ticking = false;
    }

    window.addEventListener("scroll", function () {

        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(updateHeader);
        }

    }, { passive: true });

    updateHeader();

});
