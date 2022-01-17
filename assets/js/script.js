let menuToggle = document.getElementById('menuToggle');
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});