const hamburger = document.querySelector(".hamburger");
const hidden = document.querySelector(".hidden");
const close = document.querySelector(".close");
const header = document.querySelector("header");
const section = document.querySelector(".section");
const darkMode = document.querySelector(".dark-mode");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");

// *************************************
let viewPort = window.matchMedia("(min-width: 411px)");

// *************************************
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
// *************************************

hamburger.addEventListener("click", showHidden);
close.addEventListener("click", closeHidden);

function showHidden() {
  if (viewPort.matches) {
    header.classList.remove("height");
  } else {
    header.style.height = "120vh";
  }
  hidden.style.right = "0%";
  hidden.classList.add("hide-overflow");
  hidden.style.height = "100vh";
  darkMode.style.filter = "brightness(80%)";
  darkMode.style.height = "100%";
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

function closeHidden() {
  if (viewPort.matches) {
    header.classList.remove("height");
  } else {
    header.style.height = "120vh";
  }
  hidden.style.right = "-110%";
  hidden.classList.remove("hide-overflow");
  darkMode.style.filter = "brightness(100%)";
  darkMode.style.height = "100%";
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

function firstAppear() {
  let introPosition = first.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.4;

  if (introPosition < screenPosition) {
    first.classList.add("appear");
  }
}
function secondAppear() {
  let introPosition = second.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.4;

  if (introPosition < screenPosition) {
    second.classList.add("appear");
  }
}
function thirdAppear() {
  let introPosition = third.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.4;

  if (introPosition < screenPosition) {
    third.classList.add("appear");
  }
}
function fourthAppear() {
  let introPosition = fourth.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.4;

  if (introPosition < screenPosition) {
    fourth.classList.add("appear");
  }
}

window.addEventListener("scroll", firstAppear);

window.addEventListener("scroll", secondAppear);

window.addEventListener("scroll", thirdAppear);

window.addEventListener("scroll", fourthAppear);
