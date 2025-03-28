document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle with Local Storage
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });

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
    contactBtn.addEventListener("click", function () {
        emailDisplay.style.display = emailDisplay.style.display === "block" ? "none" : "block";
    });

    // Auto-Scrolling Testimonials
    const reviewsSlider = document.querySelector(".reviews-slider");
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
});


