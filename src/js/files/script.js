// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};

// Вар 1
// const promoBlocks = document.querySelector('.promo__adv');
// const reklamaBlocks = promoBlocks.querySelectorAll('img');
// reklamaBlocks.forEach(item => { item.remove(); })

// Вар 2
// document.querySelectorAll('.promo__adv > img').forEach(item => { item.remove(); })

// Вар 3
const promoBlocks = document.querySelector('.promo__adv');
if (promoBlocks) {
	for (let i = 0; i < promoBlocks.length; i++) {
		const promoBlock = promoBlocks[i];
		promoBlock.remove();
	}
}