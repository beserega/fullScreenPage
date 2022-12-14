// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

const screens = document.querySelectorAll('[data-screen]');
const links = document.querySelectorAll('[data-link]');

function menuOpen() {
   const burger = document.querySelector('[data-burger]');
   if (burger) {
      burger.addEventListener('click', () => {
         document.documentElement.classList.toggle('menu-open');
      });
   }
}
menuOpen();

function replaceBg(id) {
   const bg = document.getElementById(id);
   screens.forEach((screen) => {
      screen.style.display = 'none';
   });
   bg.style.display = 'block';
}

window.addEventListener('resize', changeBg);

function ggg() {
   links.forEach((link) => {
      link.addEventListener('click', () => {
         if (window.innerWidth < 768) {
            document.documentElement.classList.remove('menu-open');
         }
      });
   });
}
ggg();

function changeBg() {
   links.forEach((link) => {
      link.addEventListener('mouseenter', (e) => {
         e.preventDefault();
         replaceBg(e.target.dataset.link);
      });

      link.addEventListener('click', (e) => {
         e.preventDefault();
         document.documentElement.classList.remove('menu-open');
      });
   });

   screens.forEach((screen) => {
      if (window.innerWidth > 768) {
         screen.style.display = 'none';
         screens[0].style.display = 'block';
         screen.addEventListener('click', () => {
            document.documentElement.classList.remove('menu-open');
         });
      } else {
         screen.style.display = 'block';
      }

      // screens[0].style.display = 'block';
      // screen.addEventListener('click', () => {
      //    document.documentElement.classList.remove('menu-open');
      // });
   });
}
// changeBg();
