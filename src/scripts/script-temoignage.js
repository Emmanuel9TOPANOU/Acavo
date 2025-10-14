const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;
const total = dots.length;

function showSlide(i) {
    index = (i + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, idx) => {
        dot.classList.toggle("bg-green-600", idx === index);
        dot.classList.toggle("bg-gray-300", idx !== index);
    });
}

// Navigation boutons
next.addEventListener("click", () => showSlide(index + 1));
prev.addEventListener("click", () => showSlide(index - 1));

// Navigation par points
dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

// Auto défilement
setInterval(() => showSlide(index + 1), 5000);

// Initialisation
showSlide(0);
