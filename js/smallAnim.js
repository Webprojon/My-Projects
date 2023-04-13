const navLogo = document.querySelector(".navbar #nav-logo");
const github = document.querySelector(".networks .fa-square-github");
const linkedin = document.querySelector(".networks .fa-linkedin");
const telegram = document.querySelector(".networks .fa-telegram");

export const myAnim = () => {
  setInterval(() => {
    navLogo.style.transform = `scale(1.2)`;
  }, 500);

  setInterval(() => {
    navLogo.style.transform = `scale(1)`;
  }, 1000);

  setInterval(() => {
    github.style.transform = `translateY(-3px)`;
  }, 500);

  setInterval(() => {
    github.style.transform = `translateY(3px)`;
  }, 1000);

  setInterval(() => {
    linkedin.style.transform = `translateY(-3px)`;
  }, 500);

  setInterval(() => {
    linkedin.style.transform = `translateY(3px)`;
  }, 1000);

  setInterval(() => {
    telegram.style.transform = `translateY(-3px)`;
  }, 500);

  setInterval(() => {
    telegram.style.transform = `translateY(3px)`;
  }, 1000);
};
