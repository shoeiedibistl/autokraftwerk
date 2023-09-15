const myBurger = document.getElementById("menu-burger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
const myPage = document.querySelector("html");

const closeMobileMenu = function () {
    mobileMenu.classList.remove("opened");
    myBurger.classList.remove("opened");
    myPage.style.overflow = '';
    document.removeEventListener("keydown", clickEscape); 
    myBurger.style.cursor = "";   
}

const openMobileMenu = function () {
    mobileMenu.classList.add("opened");
    myBurger.classList.add("opened");
    myPage.style.overflow = 'hidden';
    document.addEventListener("keydown", clickEscape);
    myBurger.style.cursor = "auto";
}

let clickEscape = function (event) {
    if (event.key === "Escape") closeMobileMenu()
  }

myBurger.addEventListener("click", () => myBurger.classList.contains("opened") ? closeMobileMenu() : openMobileMenu())

mobileMenuLinks.forEach((link) => link.addEventListener('click', () => closeMobileMenu()))

