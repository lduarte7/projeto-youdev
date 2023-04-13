'use strict';

// adicionar eventListener em multiplos elementos */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i=0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

// preloader */

const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  circle.style.animation = "none";
  document.body.classList.add("loaded");
})

// NAVbar Toggle para mobile

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

// ==========> HEADER <========= 
// ativar a classe Header quando scrollar a janela para baixo de 100px e fazer o header acompanhar o scroll

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", headerActive);

