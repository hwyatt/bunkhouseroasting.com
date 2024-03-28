const nav = document.getElementById("navBar");
const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    navLinks.classList.add("flex");
    navLinks.classList.add("flex-col");
    nav.classList.toggle("h-screen");
    nav.classList.toggle("fixed");
    nav.classList.toggle("z-20");

    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});
