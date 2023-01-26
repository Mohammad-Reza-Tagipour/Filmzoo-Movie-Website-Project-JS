let header = document.querySelector(".header");
let menu = document.querySelector(".bx-menu");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
window.addEventListener("scroll", () => {
  header.classList.toggle("black", window.scrollY > 499);
});

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("activee");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("activee");
};
// fade in

window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
