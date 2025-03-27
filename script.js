/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message sent successfully!");
    });
});