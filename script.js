const screens = document.querySelectorAll('[data-screen]');

function burgerClik() {
   const burger = document.querySelector('[data-burger]');
   if (burger) {
      burger.addEventListener('click', () => {
         document.documentElement.classList.toggle('menu-open');
      });
   }
}
burgerClik();

function replaceBg(id) {
   const bg = document.getElementById(id);
   if (screens.length > 0) {
      for (let i = 0; i < screens.length; i++) {
         const screen = screens[i];
         screen.style.display = 'none';
      } // for
      bg.style.display = 'block';
   } // if
}

function changBg() {
   const links = document.querySelectorAll('[data-link]');
   if (links.length > 0) {
      for (let i = 0; i < links.length; i++) {
         const link = links[i];
         link.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            if (link.hasAttribute('data-link')) {
               replaceBg(e.target.dataset.link);
            } // if hasAttribute
         });

         link.addEventListener('click', (e) => {
            e.preventDefault();
            if (document.documentElement.classList.contains('menu-open')) {
               document.documentElement.classList.remove('menu-open');
            }
         });
      } // for
   } // if links.length

   if (screens.length > 0) {
      for (let i = 0; i < screens.length; i++) {
         const screen = screens[i];
            screen.style.display = 'none';
            screens[0].style.display = 'block';
         
         
         screen.addEventListener('click', () => {
            if (document.documentElement.classList.contains('menu-open')) {
               document.documentElement.classList.remove('menu-open');
            }
         });
      }
   }
}
changBg();
