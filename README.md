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
Функция ``changeSection()``<br>
В теле данной функции будем искать в документе все пункты меню.<br> ``const links = document.querySelectorAll('[data-link]');``

Искать их будем по атрибуту ``data-link`` который будет у каждой ссылки.
```html
<a href="#" class="menu__link" data-link="sectionID">section One</a>
```
> _Забегая несколько в перед скажем что значение_ ``data-link`` _будет равно_ ``id`` _секции к которой относится этот пункт меню. По значению атрибута будет определяться нужная секция._

Перебераем все ссылки в массиве при помощи цикла ``for`` и на каждую вешаем оброботчик событий ``addEventListener`` и первым событием будет наведение курсора на ссылку ``"mouseenter"`` и внутри этого события вызовем ранее описаную функцию ``replaceSection(id)``

```javascript
link.addEventListener('mouseenter', (e) => {
   e.preventDefault(); // Отменить действие браузера по умолчанию для ссылок
   if (link.hasAttribute('data-link')) { // Проверяем наличие атрибута
      replaceSection(e.target.dataset.link); // Получаем значение атрибута "data-link='value'" и передаём в параметр "id" функции replaceSection(id)
   } // if hasAttribute
});
```

Получив значение атрибута ``data-link`` в строке ``replaceSection(e.target.dataset.link)`` тем самым мы получили ``id`` секции так как говорилось раньше эти значения идентичны.

> _В результате получаем следующее: смену экранов при навидении на соответствующий пункт меню._

Далее ещё один оброботчик событий только в этот раз будем обрабатывать ``"click"``
```javascript
link.addEventListener('click', (e) => {
   e.preventDefault(); // Отменить действие браузера по умолчанию для ссылок
   if (document.documentElement.classList.contains('menu-open')) { // Проверяем наличие класса у тега <html class="menu-open">
      document.documentElement.classList.remove('menu-open'); // Если такой класс есть то удоляем этот класс
   }
});
```

Класс ``menu-open`` мы прописываем тегу ``html`` при клике на кнопку меню (бургер) при помощи следующий функции.
```javascript
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
У кнопки меню (бургер) также присутствует некий атрибут, а именно ``data-burger``
```html
<button data-burger type="button" class="icon-menu"><span></span></button>
```
Далее наша функция ``changeSection()`` содержит ещё один цикл ``for`` в котором будем переберать наши секции выше мы это уже делали в функции ``replaceSection(id)`` И также задаём для всех секций ``display: none;`` при помощи строки ``screen.style.display = 'none';`` а для первой секции будет ``screens[0].style.display = 'block'`` делаем это для того чтоб скрыть все секции кроме первой чтобы не было горизонтального скрола.<br>
Далее обработчик собитий ``click`` где при клике по секции будем удолять класс ``menu-open`` у ``html`` тем самым будем закрывать меню.
```javascript
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
```
Весь код функции:
```javascript
function changeSection() {
   const links = document.querySelectorAll('[data-link]');
   if (links.length > 0) {
      for (let i = 0; i < links.length; i++) {
         const link = links[i];
         link.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            if (link.hasAttribute('data-link')) {
               replaceSection(e.target.dataset.link);
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
changeSection();
```
#

Весь скрипт:
```javascript
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

function changeSection() {
   const links = document.querySelectorAll('[data-link]');
   if (links.length > 0) {
      for (let i = 0; i < links.length; i++) {
         const link = links[i];
         link.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            if (link.hasAttribute('data-link')) {
               replaceSection(e.target.dataset.link);
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
changeSection();
```
### Как видно скрипт содержит всего три небольшие функции и уместился в 59 строк!
#
**Обязательные атрибуты:**<br>
Для секций (экранов) ``data-screen``
```html
<section data-screen class="screen" id="">
	
</section> <!-- screen -->
```
Для пунктов меню ``data-link``
```html
<a href="#" class="menu__link" data-link="sectionOne">section One</a>
```
Для бургера ``data-burger``
```html
<button data-burger type="button" class="icon-menu"><span></span></button>
```
<p align="center"><a href="https://beserega.github.io/fullScreenPage/" ><strong>Живой пример</strong></a></p>

#

HTML секций используемый в данной призентации:

```html
<section data-screen class="screen" id="">
	<div class="main">
		<div class="main__wrapper">
			<div class="main__container">
				<div class="main__body">
					<div class="main__item">
						<h1 class="title">@@pagename</h1>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
						Temporibus, quo soluta quas recusandae earum deserunt cum 
						distinctio ipsum perferendis quis adipisci eos autem. 
						Quas odit sapiente dolores et ex officia.</p>
						<button type="button" class="btn"><span>Отправить</span></button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="shadow one"></div> // Дополнительное оформление секции
	<div class="shadow two"></div> // Дополнительное оформление секции
</section> <!-- screen -->
```
Если нужно чтобы у каждой секции было своё оформление добавить доп. класс к div с классом ``main__wrapper`` на пример ``main__wrapper section-one`` ``main__wrapper section-two`` и.т.д и для каждого этого класса писать свои стили. Данный шаблон не обязателен к использованию также как и названия классов. Анимацию использованую в этой вёрстке можно увидить в файле 
