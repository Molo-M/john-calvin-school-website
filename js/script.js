// 1. For the navbar menu item 

function toggleMenu(e) {
    // Get the navigation links container
    const nav_container = document.querySelector(".nav_links");
    // If we click menubar, for the first time 
    if (e.name === "menu-outline") {
        e.name = "close-outline";
    // If we click to close menu bar
    } else {
        e.name = "menu-outline";
    }
    // CMake the navigation container visible
    nav_container.classList.toggle("hidden");
}

// 2. For the image slider on the home page 

let currentSlide = 0;
const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("img");
const totalSlides = slides.length;

// Select the "next" button by its ID and attach a click event listener to it
document.getElementById("next").addEventListener("click", function () {
    // When the "next" button is clicked, increase the current slide index by 1
    // Use modulo (%) to loop back to the beginning if we're at the last slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Call the function that updates the slide position based on the new index
    updateSlide();
});

// Select the "prev" button by its ID and attach a click event listener to it
document.getElementById("prev").addEventListener("click", function () {
    // When the "previous" button is clicked, decrease the current slide index by 1
    // Adding totalSlides before modulo ensures the result is never negative
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;

    // Call the function to update the slide position
    updateSlide();
});

// This function shifts the slider to show the current slide
function updateSlide() {
    // Calculate how much to move the slider container based on the slide width (100% per slide)
    // Apply a translateX style to shift the entire slider to the left
    slider.style.transform = "translateX(-" + (currentSlide * 100) + "%)";
}

// Automatically move to the next slide every 3 seconds
setInterval(function () {
    // Increase the slide index and loop back if necessary
    currentSlide = (currentSlide + 1) % totalSlides;

    // Update the slide position
    updateSlide();
}, 3000);