
/* ==========================================
   THE NEW LANGUAGE EXPERIMENT
   VIDEO LIBRARY FILTERS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const videoCards =
        document.querySelectorAll(".video-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedCategory =
                button.dataset.filter;

            // Update active button
            filterButtons.forEach(item => {
                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            // Filter video cards
            videoCards.forEach(card => {

                const category = card.dataset.category;

                const shouldShow =
                    selectedCategory === "all" ||
                    category === selectedCategory;

                card.hidden = !shouldShow;

            });

        });

    });

});
