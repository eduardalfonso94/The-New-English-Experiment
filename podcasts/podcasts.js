
/* ==========================================
   THE NEW LANGUAGE EXPERIMENT
   PODCAST PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons =
        document.querySelectorAll(".episode-filter");

    const episodeCards =
        document.querySelectorAll(".episode-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedLevel = button.dataset.level;

            // Update active filter
            filterButtons.forEach(item => {
                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            // Filter episodes
            episodeCards.forEach(card => {

                const cardLevel = card.dataset.level;

                const shouldShow =
                    selectedLevel === "all" ||
                    cardLevel === selectedLevel;

                card.hidden = !shouldShow;

            });

        });

    });

});
