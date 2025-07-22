const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

const sr = ScrollReveal ({
  distance: '25px',
  duration: 2500,
  reset: true
});

// sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.skills,.services,.portfolio,.projects,.contact',{delay:200, origin:'bottom'});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach(section => {
  const sectionTop = section.offsetTop - 100;
  const sectionHeight = section.offsetHeight;

if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
  current = section.getAttribute("id");
  }
});

navLinks.forEach(link => {
  link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
      }
  });
});

document.querySelectorAll('.row-icon i').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active');
  });
});