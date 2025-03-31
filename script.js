document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    function applyDarkModeStyles(enable) {
        const textElements = document.querySelectorAll("body, nav ul li a, .project, .review, footer");

        textElements.forEach(element => {
            if (enable) {
                element.style.color = "white";
                element.style.backgroundColor = "#121212"; 
            } else {
                element.style.color = "";
                element.style.backgroundColor = "";
            }
        });
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const isDarkMode = document.body.classList.contains("dark-mode");
            applyDarkModeStyles(isDarkMode);

            localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
        });
    }

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        applyDarkModeStyles(true);
    }

    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            let targetElement = document.querySelector(this.getAttribute("href"));
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const contactBtn = document.getElementById("contact-btn");
    const emailDisplay = document.getElementById("email-display");
    if (contactBtn && emailDisplay) {
        contactBtn.addEventListener("click", function () {
            emailDisplay.style.display = emailDisplay.style.display === "block" ? "none" : "block";
        });
    }

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

        reviewsSlider.addEventListener("mouseenter", () => isPaused = true);
        reviewsSlider.addEventListener("mouseleave", () => isPaused = false);
    }
    document.getElementById("resume-btn").addEventListener("click", function () {
        window.open("your-resume.pdf", "_blank");
    });
    
});
