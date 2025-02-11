// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

/* Задания на урок:
5) Добавить нумерацию выведенных фильмов */

'use strict';


//<task 1>=================================
// Удалить все рекламные блоки со страницы (правая часть сайта)

// Вар 1
// const promoBlocks = document.querySelector('.promo__adv');
// const reklamaBlocks = promoBlocks.querySelectorAll('img');
// reklamaBlocks.forEach(item => { item.remove(); })

// Вар 2
// document.querySelectorAll('.promo__adv img').forEach(item => { item.remove(); })

// Вар 3
// const promoBlocks = document.querySelectorAll('.promo__adv > img');
// console.log(promoBlocks);
// if (promoBlocks) {
// 	for (let i = 0; i < promoBlocks.length; i++) {
// 		let promoBlock = promoBlocks[i];
// 		promoBlock.remove();
// 	}
// }

//<task 1>=================================

//<task 2>=================================
// Изменить жанр фильма, поменять "комедия" на "драма"

// Вар 1
// const genre = document.querySelector('.promo__genre');
// genre.innerHTML = 'драма';

// Вар 2
// const genre = document.querySelector('.promo__genre');
// genre.innerHTML = '';
// genre.insertAdjacentText("beforeend", 'драма');
//<task 2>=================================

//<task 3>=================================
// Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// Вар 1
// const bgImage = document.querySelector('.promo__bg');
// bgImage.style.backgroundImage = 'url("../img/main/bg.jpg")';

// Вар 2
// const bgImage = document.querySelector('.promo__bg');
// bgImage.style.cssText = `background-image: url("../img/main/bg.jpg");`;
//<task 3>=================================

//<task 4>=================================
// Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против...",
	]
};

// Вар 1
const moviesCopy = Object.assign([], movieDB.movies.sort());
const parentList = document.querySelector('.promo__interactive-list');
parentList.innerHTML = '';

moviesCopy.forEach((item, index) => {
	parentList.insertAdjacentHTML('beforeend', `<div class='promo__interactive-item'>\n${index + 1}. ${item}\n<div class='delete'></div>`);
});

// Вар 2
// const moviesCopy = Object.assign([], movieDB.movies.sort());
// const parentList = document.querySelector('.promo__interactive-list');
// parentList.innerHTML = '';

// for (let i = 0; i < moviesCopy.length; i++) {
// 	const element = moviesCopy[i];
// 	parentList.innerHTML += `
// 	<div class='promo__interactive-item'>
// 		${i + 1}. ${element}
// 		<div class='delete'>
// 		</div>
// 	</div>`;
// }
//<task 4>=================================


//  Задания на урок 33:
// <task 1>=================================
/* 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
 */
const btn = document.querySelector('button');
const inpt = document.querySelector('.adding__input');
btn.addEventListener('click', (e) => {
	e.preventDefault();
	movieDB.movies.push(inpt.value);
	console.log(inpt.value);
});

// console.log(moviesCopy);
// <task 1>=================================

// <task 2>=================================
// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// <task 2>=================================

// <task 3>=================================
// 3) При клике на мусорную корзину - элемент будет удаляться из списка(сложно)

// <task 3>=================================

// <task 4>=================================
// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
// "Добавляем любимый фильм"

// <task 4>=================================

// <task 5>=================================
// 5) Фильмы должны быть отсортированы по алфавиту

// <task 5>=================================

'use strict';

// Возьмите свой код из предыдущей практики