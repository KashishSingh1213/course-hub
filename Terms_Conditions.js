// navbar
const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
    mobileMenu.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    mobileMenu.classList.remove("scrolled");
  }
});
 
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
Shery.mouseFollower();
Shery.makeMagnet(".button,#menu-btn,.bts", {});
Shery.textAnimate(".head" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 1.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
tl.from(".list", {
  y: -100,
  duration: 0.8,
  opacity: 0,
  stagger: 0.2,
});
