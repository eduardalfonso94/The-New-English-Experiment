
/* ==========================================
   FLOATING MENU
   THE NEW LANGUAGE EXPERIMENT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Prevent duplicate menus
    if (document.getElementById("floatingMenuToggle")) {
        return;
    }

    // Detect whether we are on the home page
    // or inside a subfolder.

    const path = window.location.pathname;
    const isHomePage = /\/(?:index\.html)?$/.test(path);
    const base = isHomePage ? "" : "../";

    // Create menu button
    const toggle = document.createElement("button");

    toggle.id = "floatingMenuToggle";
    toggle.className = "floating-menu-toggle";
    toggle.type = "button";

    toggle.setAttribute("aria-label", "Open navigation menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "floatingMenuPanel");

    toggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    // Create menu panel
    const panel = document.createElement("nav");

    panel.id = "floatingMenuPanel";
    panel.className = "floating-menu-panel";
    panel.setAttribute("aria-label", "Quick navigation");
    panel.setAttribute("inert", "");

    panel.innerHTML = `
        <span class="floating-menu-title">
            EXPLORE THE WEBSITE
        </span>

        <div class="floating-menu-links">

            <a href="${base}index.html">
                <span class="floating-link-icon">⌂</span>
                Home
            </a>

            <a href="${base}courses/courses.html">
                <span class="floating-link-icon">▤</span>
                Courses
            </a>

            <a href="${base}practice/practice.html">
                <span class="floating-link-icon">✎</span>
                Practice
            </a>

            <a href="${base}explore/explore.html">
                <span class="floating-link-icon">◈</span>
                Explore
            </a>

            <a href="${base}videos/videos.html">
                <span class="floating-link-icon">▶</span>
                Videos
            </a>

            <a href="${base}podcasts/podcasts.html">
                <span class="floating-link-icon">◉</span>
                Podcasts
            </a>

            <a href="${base}about/about.html">
                <span class="floating-link-icon">ⓘ</span>
                About Us
            </a>

            <a href="${base}diagnostic/diagnostic.html"
               class="floating-diagnostic-link">
                <span class="floating-link-icon">✦</span>
                Test Your English Level
            </a>

        </div>
    `;

    document.body.appendChild(toggle);
    document.body.appendChild(panel);

    // Open or close menu
    function setMenuOpen(open) {
        toggle.classList.toggle("is-open", open);
        panel.classList.toggle("is-open", open);

        toggle.setAttribute(
            "aria-expanded",
            String(open)
        );

        toggle.setAttribute(
            "aria-label",
            open ? "Close navigation menu" : "Open navigation menu"
        );

        if (open) {
            panel.removeAttribute("inert");
        } else {
            panel.setAttribute("inert", "");
        }
    }

    toggle.addEventListener("click", () => {
        const open = !toggle.classList.contains("is-open");
        setMenuOpen(open);
    });

    // Close when clicking outside
    document.addEventListener("click", event => {
        if (
            !toggle.contains(event.target) &&
            !panel.contains(event.target)
        ) {
            setMenuOpen(false);
        }
    });

    // Close with Escape
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            setMenuOpen(false);
            toggle.focus();
        }
    });

    // Close after selecting a link
    panel.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            setMenuOpen(false);
        });
    });

});
