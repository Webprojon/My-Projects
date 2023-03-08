"use strict";
import { projects } from "./data.js";
import { myAnim } from "./smallAnim.js";
// Selectors
const loader = document.querySelector(".loader");
const cards = document.querySelector(".cards");
// Events & Functions

// Navbar
// window.addEventListener("scroll", function () {
//   if (window.screenY < 20) {
//     navbar.classList.add("change-nav-back");
//   } else {
//     navbar.classList.remove("change-nav-back");
//   }
// });
// Navbar

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
    const markup = `
  <div class="card">

  <div class="img-part">
  <img src=${project.proImg} alt="img">
  <div class="overlay">
  <h2>Click</h2>
  </div>
  </div>
  
  <div class="modal">
  <h4>${project.name}</h4>
  <a href=${project.link} target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>

  </div>
  `;
    cards.insertAdjacentHTML("beforeend", markup);
  });
}

renderImg();

const overlays = document.querySelectorAll(".overlay");
const modals = document.querySelectorAll(".modal");

overlays.forEach((overlay, index1) => {
  overlay.addEventListener("click", () => {
    setTimeout(() => {
      clickStatus(index1);
    }, 200);
    modal(index1);
  });
});

function clickStatus(index1) {
  const txts = document.querySelectorAll(".overlay h2");
  txts.forEach((txt, i) => {
    if (index1 == i) {
      txt.textContent = "Clicked";
    } else {
      txt.textContent = "Click";
    }
  });
}

function modal(index1) {
  modals.forEach((modal, index2) => {
    if (index1 === index2) {
      setTimeout(() => {
        modal.style.opacity = 1;
      }, 800);
    } else {
      modal.style.opacity = 0;
    }
  });
}
// Card Rendering
