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