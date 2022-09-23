<h2 align="center">Full Screen Pages</h2>
<div align="center"><img src="https://github.com/beserega/fullScreenPage/blob/main/Screenshot.png" width="70%" alt=""></div>
<p align="center"><a href="https://beserega.github.io/fullScreenPage/" ><strong>Живой пример</strong></a></p>

#

### FullScreenPages без использования различных библиотек и плагинов, на чистом JavaScript.
#
Описываем функцию ``replaceSection()`` котороя будет принимать один праметр ``id`` ``replaceSection(id)`` .<br>

>_Эта функция нужна для того чтобы при навидении курсора на пункт меню отследить секцию к которой принадлежит данный пункт меню._ 

Получаем секцию с определённым ``id="sectionID"`` ``const section = document.getElementById(id);`` Далее циклом ``for`` перебераем все секции (экраны) полученные ранее в начале нашего файла .js <br>
``const screens = document.querySelectorAll('[data-screen]');`` по атрибуту ``data-screen`` который есть у каждой секции 
```html
<!-- Базовый html для всех секций -->
<section data-screen class="screen" id="sectionID"></section>
```
и задаём для всех секций ``display: none;`` при помощи строки ``screen.style.display = 'none';``
```html
<section data-screen class="screen" id="sectionID" style="display: none;"></section>
```
а для секции с нужным нам ``id`` задаём ``display: block;`` с помощью строки ``section.style.display = 'block';``
```html
<section data-screen class="screen" id="sectionID" style="display: block;"></section>
```
Весь код функции:
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
#
Функция ``changSection()``<br>
В теле данной функции будем искать в документе все пункты меню.<br> ``const links = document.querySelectorAll('[data-link]');``

Искать их будем по атрибуту ``data-link`` который будет у каждой ссылки.
```html
<a href="#" class="menu__link" data-link="sectionID">section One</a>
```
> _Забегая несколько в перед скажем что значение_ ``data-link`` _будет равно_ ``id`` _секции к которой относится этот пункт меню. По значению атрибута будет определяться нужная секция._

Переберае все ссылки в массиве и на каждую вешаем оброботчик событий ``addEventListener`` и первым событием будет наведение курсора на ссылку ``"mouseenter"`` и внутри этого события вызовем ранее описаную функцию ``replaceSection(id)``
