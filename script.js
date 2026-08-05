 menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {let
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}