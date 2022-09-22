const screens = document.querySelectorAll('[data-screen]');
const links = document.querySelectorAll('[data-link]');
console.log(links[0]);
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

function clickLinkKloseMenu() {
   links.forEach((link) => {
      link.addEventListener('click', () => {
         if (window.innerWidth < 768) {
            document.documentElement.classList.remove('menu-open');
         }
      });
   });
}
clickLinkKloseMenu();

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
   });
}
