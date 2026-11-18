
/* ======================================
   PODCASTS - FLOATING HEADER
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".podcast-header");

    if (!header) return;

    let ticking = false;

    function updateHeader() {

        const scrollPosition = window.scrollY;
        const isCompact = header.classList.contains("is-compact");

        if (!isCompact && scrollPosition > 120) {
            header.classList.add("is-compact");
        } else if (isCompact && scrollPosition < 30) {
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


/* Episode filters: preserve the selected level and accessible pressed state. */
document.addEventListener("DOMContentLoaded", function () {
    const filters = Array.from(document.querySelectorAll(".episode-filter"));
    const cards = Array.from(document.querySelectorAll(".episode-card[data-level]"));
    filters.forEach(function (filter) {
        filter.addEventListener("click", function () {
            const level = filter.dataset.level;
            filters.forEach(function (item) {
                const active = item === filter;
                item.classList.toggle("active", active);
                item.setAttribute("aria-pressed", String(active));
            });
            cards.forEach(function (card) {
                card.hidden = level !== "all" && card.dataset.level !== level;
            });
        });
    });
});
