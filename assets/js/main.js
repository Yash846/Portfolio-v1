import AOS from "aos";
import Typed from "typed.js";

/*
    LOADER FUNCTION
*/

const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

function animateLogo(scrollPos = 0) {
  setTimeout(() => {
    loader.classList.add("exit");
    setTimeout(() => {
      loader.style.display = "none";
      main.style.display = "block";
      setTimeout(() => {
        main.style.opacity = 1;
        window.scrollTo(0, scrollPos);
        AOS.init({ easing: "ease-in-out" }); //  AOS On Load Animation Library
      }, 50);
    }, 500);
  }, 5000);
}

animateLogo();

/*
    Header OnClick Loader Animation
*/

const name = document.getElementById("header-name");
name.addEventListener("click", () => {
  const scrollPos = window.scrollY;
  main.style.opacity = 0;
  main.style.display = "none";
  loader.classList.remove("exit");
  loader.style.display = "block";
  animateLogo(scrollPos);
});

/* 
    Typed effect 
*/

const typedStr = document.getElementById("typed");
let typedStrArray = typedStr.getAttribute("data-type-items");
typedStrArray = typedStrArray.split(",");
const typed = new Typed("#typed", {
  strings: typedStrArray,
  loop: true,
  typeSpeed: 30,
  backSpeed: 30,
  backDelay: 1500,
  // startDelay: 1000,
});

/*
    Nav Menu Toggle
*/
const menuBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#header");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    navMenu.classList.add("nav-active");
    menuBtn.classList.add("burger-transform");
    menuOpen = true;
  } else {
    navMenu.classList.remove("nav-active");
    menuBtn.classList.remove("burger-transform");
    menuOpen = false;
  }
});

/*
    NAV links active on scroll
*/

const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll("nav li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLink.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.name.includes(current)) {
      li.classList.add("active");
    }
  });
});
