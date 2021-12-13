"use script";

const listBtn = document.querySelector(".list-btn");
const img = document.querySelector(".list-btn__logo");
const list = document.querySelector(".list");
const mql = window.matchMedia("(min-width:65.625em)");
let resizeTimer;

list.classList.add("list-hidden");

/* Functions to close and open list menu when max-width:1050px */

const closeList = function () {
  list.classList.add("list-hidden");
  listBtn.classList.remove("btn-hidden");
  img.src = "images/icon-hamburger.svg";
};
const openList = function () {
  listBtn.classList.add("btn-hidden");
  img.src = "images/icon-close.svg";
  list.classList.remove("list-hidden");
};

// Eventlistener to stop transition triggering when page reloads

window.addEventListener("load", function () {
  document.querySelector("body").classList.remove("preload");
});

// Eventlistener to stop transition triggering when page is resized
window.addEventListener("resize", () => {
  document.body.classList.add("preload");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("preload");
  }, 300);
});

// Eventlistener to stop transition triggering when page resizes

mql.onchange = (e) => {
  if (e.matches) {
    closeList();
  }
};

// Eventlistener for closing and opening list

listBtn.addEventListener("click", function (e) {
  if (listBtn.classList.contains("btn-hidden")) {
    closeList();
  } else {
    openList();
  }
});
