
/* ======================================
   THE NEW LANGUAGE EXPERIMENT
   INTERACTIVE JAVASCRIPT
====================================== */


/* ======================================
   1. WELCOME MESSAGE
====================================== */

const heroButton = document.querySelector(".hero .main-button");
const heroContent = document.querySelector(".hero-content");

if (heroButton && heroContent) {

    heroButton.addEventListener("click", function () {

        let welcomeMessage = document.querySelector(".welcome-message");

        if (!welcomeMessage) {

            welcomeMessage = document.createElement("p");

            welcomeMessage.className = "welcome-message";

            welcomeMessage.setAttribute("role", "status");

            welcomeMessage.textContent =
                "Welcome! Your English learning journey starts here.";

            welcomeMessage.style.marginTop = "20px";
            welcomeMessage.style.color = "#ffffff";
            welcomeMessage.style.fontWeight = "bold";

            heroContent.appendChild(welcomeMessage);

        }

    });

}


/* ======================================
   2. SEARCH FUNCTION
====================================== */

// Create search container

const searchContainer = document.createElement("div");
searchContainer.className = "search-container";

// Create search field wrapper

const searchField = document.createElement("div");
searchField.className = "search-field";

// Create search input

const searchInput = document.createElement("input");

searchInput.type = "search";
searchInput.placeholder = "Search courses and learning resources...";
searchInput.id = "searchInput";

searchInput.setAttribute(
    "aria-label",
    "Search courses and learning resources"
);

searchInput.className = "search-input";

searchField.appendChild(searchInput);
searchContainer.appendChild(searchField);

// Insert search bar after navigation

const navigation = document.querySelector("nav");

if (navigation) {
    navigation.after(searchContainer);
}

// Create message for searches without results

const noResults = document.createElement("p");

noResults.textContent =
    "No matching resources found. Try another search.";

noResults.className = "no-results";
noResults.style.display = "none";

searchContainer.appendChild(noResults);



// Search courses, resources and sections

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase().trim();

    const cards = document.querySelectorAll(
        ".content-card, .level-card"
    );

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    let visibleCards = 0;
    let visibleSections = 0;


    // Reset everything when the search is empty

    if (searchValue === "") {

        cards.forEach(function (card) {
            card.style.display = "";
        });

        sections.forEach(function (section) {
            section.style.display = "";
        });

        noResults.style.display = "none";

        return;
    }


    // Search inside individual cards

    cards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchValue)) {

            card.style.display = "";
            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });


    // Search inside section titles and descriptions

    sections.forEach(function (section) {

        const sectionText = section.textContent.toLowerCase();

        if (sectionText.includes(searchValue)) {

            section.style.display = "";
            visibleSections++;

        } else {

            section.style.display = "none";

        }

    });


    // Show message only when there are no results

    if (visibleCards === 0 && visibleSections === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});

/* ======================================
   3. ACTIVE NAVIGATION
====================================== */

const navigationLinks = document.querySelectorAll("nav a");

const pageSections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navigationLinks.forEach(function (link) {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },

        {
            threshold: 0,
            rootMargin: "-20% 0px -65% 0px"
        }

    );


    pageSections.forEach(function (section) {

        sectionObserver.observe(section);

    });

}


/* ======================================
   4. CURRENT YEAR IN FOOTER
====================================== */

const copyright = document.querySelector(".copyright p");

if (copyright) {

    copyright.textContent =
        "© " + new Date().getFullYear() +
        " The New Language Experiment. All rights reserved.";

}


/* ======================================
   5. CONSOLE MESSAGE
====================================== */

console.log(
    "Welcome to The New Language Experiment!"
);

console.log(
    "Interactive learning platform successfully loaded."
);

// HERO SECTION ANIMATION

const hero = document.querySelector(".hero");
const homeLinks = document.querySelectorAll('a[href="#home"]');

function replayHeroAnimation() {

    hero.classList.remove("animate-hero");

    // Force the browser to restart the animation
    void hero.offsetWidth;

    hero.classList.add("animate-hero");
}

// Play animation when the page loads

if (hero) {
    hero.classList.add("animate-hero");
}

// Replay animation when Home is clicked

if (hero && homeLinks.length > 0) {
    homeLinks.forEach(link => {
        link.addEventListener("click", replayHeroAnimation);
    });
}