document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    function applyDarkModeStyles(enable) {
        const textElements = document.querySelectorAll("body, nav ul li a, .project, .review, footer");

        textElements.forEach(element => {
            if (enable) {
                element.style.color = "white";
                element.style.backgroundColor = "#121212"; // Optional for better contrast
            } else {
                element.style.color = "";
                element.style.backgroundColor = "";
            }
        });
    }

    // Dark Mode Toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const isDarkMode = document.body.classList.contains("dark-mode");
            applyDarkModeStyles(isDarkMode);

            localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
        });
    }

    // Load Dark Mode Preference on Page Load
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        applyDarkModeStyles(true);
    }

    // Smooth Scrolling for Navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            let targetElement = document.querySelector(this.getAttribute("href"));
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Contact Me Button Toggle
    const contactBtn = document.getElementById("contact-btn");
    const emailDisplay = document.getElementById("email-display");
    if (contactBtn && emailDisplay) {
        contactBtn.addEventListener("click", function () {
            emailDisplay.style.display = emailDisplay.style.display === "block" ? "none" : "block";
        });
    }

    // Auto-Scrolling Testimonials
    const reviewsSlider = document.querySelector(".reviews-slider");
    if (reviewsSlider) {
        let isPaused = false;

        function scrollReviews() {
            if (!isPaused) {
                reviewsSlider.style.transition = "transform 0.5s ease-in-out";
                reviewsSlider.style.transform = "translateX(-33.33%)";
                setTimeout(() => {
                    reviewsSlider.appendChild(reviewsSlider.firstElementChild);
                    reviewsSlider.style.transition = "none";
                    reviewsSlider.style.transform = "translateX(0%)";
                }, 500);
            }
        }

        let reviewInterval = setInterval(scrollReviews, 4000);

        // Pause on Hover
        reviewsSlider.addEventListener("mouseenter", () => isPaused = true);
        reviewsSlider.addEventListener("mouseleave", () => isPaused = false);
    }
    document.getElementById("resume-btn").addEventListener("click", function () {
        // Open Resume in a New Tab
        window.open("your-resume.pdf", "_blank");
    });
    
});
