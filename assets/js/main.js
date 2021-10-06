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
      document.body.style.overflowY = "initial";
      main.style.display = "block";
      window.scrollTo(0, scrollPos);
      setTimeout(() => {
        main.style.opacity = 1;
        AOS.init({ easing: "ease-in-out", duration: 800 }); //  AOS On Load Animation Library
      }, 50);
    }, 500);
  }, 5000);
}

animateLogo();

/*
    Header OnClick Loader Animation
*/

const name = document.getElementById("name-img");
name.addEventListener("click", () => {
  let scrollPos = window.scrollY;
  main.style.opacity = 0;
  main.style.display = "none";
  loader.classList.remove("exit");
  loader.style.display = "block";
  animateLogo(scrollPos);
  scrollPos = 0;
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
const navLinks = document.querySelectorAll(".nav-item");
const menuBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#header");

const navToggle = () => {
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

    /* link fade in animation */

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.4s ease ${
          index / 7 + 0.3
        }s forwards`;
      }
    });
  });

  /* Link on click nav close */

  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      navMenu.classList.remove("nav-active");
      menuBtn.classList.remove("burger-transform");
      menuOpen = false;
      navLinks.forEach((link) => {
        link.style.animation = "";
      });
    });
  });
};

navToggle();

/*
    NAV links active on scroll
*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.name.includes(current)) {
      li.classList.add("active");
    }
  });
});

/*
      Contact Form Validation style updation 
*/

const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }

  form.classList.add("was-validated");
});
