
/* ======================================
   ABOUT US - FLOATING HEADER
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".about-header");

    if (!header) return;

    let ticking = false;

    function updateHeader() {

        const isCompact = header.classList.contains("is-compact");

        if (!isCompact && window.scrollY > 120) {
            header.classList.add("is-compact");
        } else if (isCompact && window.scrollY < 30) {
            header.classList.remove("is-compact");
        }

        ticking = false;
    }

    window.addEventListener("scroll", function () {

        if (ticking) return;

        ticking = true;

        requestAnimationFrame(updateHeader);

    }, { passive: true });

    updateHeader();

});
