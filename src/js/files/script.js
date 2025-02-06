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
// document.querySelectorAll('.promo__adv > img').forEach(item => { item.remove(); })

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
		"Скотт Пилигрим против..."
	]
};

const moviesCopy = movieDB.movies

const moviesItems = document.querySelectorAll('.promo__interactive-item');
moviesItems.forEach(element => {
	element
});
//<task 4>=================================