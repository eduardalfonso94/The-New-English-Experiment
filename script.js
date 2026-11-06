
// ======================================
// THE NEW LANGUAGE EXPERIMENT
// JAVASCRIPT
// ======================================


// 1. WELCOME BUTTON

const startButton = document.querySelector(".main-button");

if (startButton) {

    startButton.addEventListener("click", function(event) {

        event.preventDefault();

        alert("Welcome to The New Language Experiment! Your learning journey starts here.");

    });

}


// 2. SEARCH FUNCTION

const searchInput = document.createElement("input");

searchInput.type = "text";
searchInput.placeholder = "Search learning resources...";
searchInput.id = "searchInput";


// Create search container

const searchContainer = document.createElement("div");

searchContainer.style.padding = "20px 8%";
searchContainer.style.backgroundColor = "#f5f7fa";

searchContainer.appendChild(searchInput);


// Insert search bar into the page

const navigation = document.querySelector("nav");

if (navigation) {

    navigation.after(searchContainer);

}


// Search learning content

searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(
        ".content-card, .level-card"
    );

    cards.forEach(function(card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchValue)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});


// 3. WELCOME MESSAGE

console.log(
    "Welcome to The New Language Experiment!"
);


// 4. CURRENT YEAR IN FOOTER

const copyright = document.querySelector(".copyright p");

if (copyright) {

    copyright.textContent =
        "© " + new Date().getFullYear() +
        " The New Language Experiment. All rights reserved.";

}
