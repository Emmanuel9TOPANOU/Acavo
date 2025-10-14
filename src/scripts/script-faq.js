// Gestion de l’accordéon
document.querySelectorAll("[data-faq]").forEach((faq) => {
    const content = faq.querySelector("div.mt-3");
    const icon = faq.querySelector("svg");

    faq.addEventListener("click", () => {
    const isOpen = !content.classList.contains("hidden");

    // Ferme les autres FAQ
    document.querySelectorAll("[data-faq]").forEach((item) => {
        item.querySelector("div.mt-3").classList.add("hidden");
        item.querySelector("svg").classList.remove("rotate-180");
    });

    // Ouvre celle cliquée
    if (!isOpen) {
        content.classList.remove("hidden");
        icon.classList.add("rotate-180");
    } else {
        content.classList.add("hidden");
        icon.classList.remove("rotate-180");
    }
    });
});
