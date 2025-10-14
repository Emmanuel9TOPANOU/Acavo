// --- Header Blur on Scroll ---
function toggleHeaderBlur() {
    const header = document.getElementById("blurHeader");
    const scrollThreshold = 50;
    const blurClasses = ["bg-white/10", "backdrop-blur-md", "border-b"];
    const defaultClasses = ["bg-gray-50", "border-b", "border-gray-200"];

    if (window.scrollY > scrollThreshold) {
        defaultClasses.forEach((cls) => header.classList.remove(cls));
        blurClasses.forEach((cls) => header.classList.add(cls));
    } else {
        blurClasses.forEach((cls) => header.classList.remove(cls));
        defaultClasses.forEach((cls) => header.classList.add(cls));
    }
}

window.addEventListener("scroll", toggleHeaderBlur);
toggleHeaderBlur();

// --- Menu Burger ---
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    navMenu.classList.toggle("flex");
});

