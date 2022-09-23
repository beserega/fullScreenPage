<h2 align="center">Full Screen Pages</h2>
<div align="center"><img src="https://github.com/beserega/fullScreenPage/blob/main/Screenshot.png" width="70%" alt=""></div>
<p align="center"><a href="https://beserega.github.io/fullScreenPage/" ><strong>Живой пример</strong></a></p>

#

### FullScreenPages без использования различных библиотек и плагинов, на чистом JavaScript.

Описываем функцию ``replaceBg()`` котороя будет принимать один апраметр ``id`` ``replaceBg(id)`` .<br>
_Эта функция нужна для того чтобы при навидении курспра на пункт меню отследить секцию к которой принадлежит данный пункт меню._
```javascript
function replaceSection(id) {
   const section = document.getElementById(id);
   if (screens.length > 0) {
      for (let i = 0; i < screens.length; i++) {
         const screen = screens[i];
         screen.style.display = 'none';
      } // for
      section.style.display = 'block';
   } // if
}
```

```html
<button data-burger type="button" class="icon-menu"><span></span></button>
```

```javascript
// Отслеживаем клик по кнопке меню (бургеру).
// И добавляем либо уаляем класс menu-open к <html class="menu-open">

function burgerClik() {
   const burger = document.querySelector('[data-burger]');
   if (burger) {
      burger.addEventListener('click', () => {
         document.documentElement.classList.toggle('menu-open');
      });
   }
}
burgerClik();
```
