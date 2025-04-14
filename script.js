// DOM elements
const button = document.getElementById("animateBtn");
const box = document.getElementById("box");

// Check if the user has triggered the animation before
if (localStorage.getItem("animationTriggered") === "true") {
    box.classList.add("animate"); // Automatically add the animation if true
}

// Function to trigger the animation and store user preference
button.addEventListener("click", () => {
    box.classList.add("animate");

    // Store in localStorage that the animation has been triggered
    localStorage.setItem("animationTriggered", "true");

    // Remove animation class after animation ends to allow retriggering
    setTimeout(() => {
        box.classList.remove("animate");
    }, 1000); // Matches animation duration
});
