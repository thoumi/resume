document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".skill-bar").forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
    });
});
