"use strict";
import { projects } from "./data.js";
import { myAnim } from "./smallAnim.js";
// Selectors
const loader = document.querySelector(".loader");
const cards = document.querySelector(".cards");
// Events & Functions

// Loader
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 1500);

  myAnim();
});
// Loader

// Card Rendering
function renderImg() {
  projects.forEach((project) => {
    const html = `
  <div class="card" data-aos="zoom-in" data-aos-duration="1000">

  <div class="img-part">
  <i class="fa-solid fa-lock"></i>
  <div class="overlay">
  </div>
  </div>
  
  <div class="modal">
  <h4>${project.name}</h4>
  <a href=${project.link} target="_blank"><i class="fa-solid fa-lock-open"></i></a>
  </div>

  </div>
  `;
    cards.insertAdjacentHTML("beforeend", html);
  });
}
renderImg();

const overlays = document.querySelectorAll(".overlay");
const modals = document.querySelectorAll(".modal");

overlays.forEach((overlay, index1) => {
  overlay.addEventListener("mouseenter", () => {
    modal(index1);
  });
});

function modal(index1) {
  modals.forEach((modal, index2) => {
    if (index1 === index2) {
      setTimeout(() => {
        modal.style.opacity = 1;
      }, 200);
    } else {
      modal.style.opacity = 0;
    }
  });
}
// Card Rendering
