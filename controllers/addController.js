const Token = require("../models/tokenModel.js");
const userModel = require('../models/userModel.js');
const authService = require('../service/authService.js');
const { validationResult } = require("express-validator");
const Test = require('../models/testModel.js');
const Question = require('../models/questionModel.js');

class AuthController {

	async add(req, res, next) {
		try {
			const test1 = new Test({
				name: 'Тест Junior',
				age_group: 7,
				description: 'Тест для детей 7-10 лет',
				max_questions: 30,
				questions: [] // Начально пустой массив вопросов
			});
			const test2 = new Test({
				name: 'Тест Middle',
				age_group: 10,
				description: 'Тест для детей 10-14 лет',
				max_questions: 30,
				questions: [] // Начально пустой массив вопросов
			});
			const test3 = new Test({
				name: 'Тест Senior',
				age_group: 14,
				description: 'Тест для детей 14-18 лет',
				max_questions: 30,
				questions: [] // Начально пустой массив вопросов
			});

			const question1 = new Question({
				text: 'Какой символ обычно используется для смайлика, который вы используете, чтобы показать, что вы счастливы?',
				correct_answer: 'Win+L',
				answers: ['@', '#', ':)', '&']
			});
			const question2 = new Question({
				text: 'Как называется устройство, на котором вы играете в компьютерные игры?',
				correct_answer: 'Компьютер',
				answers: [
					'Клавиатура',
					'Монитор',
					'Компьютер',
					'Ручка'
				]
			});
			const question3 = new Question({
				text: 'Что такое "вирус" в компьютерном мире?',
				correct_answer: 'Программа, которая может повредить ваш компьютер',
				answers: [
					'Маленькое насекомое',
					'Программа, которая может повредить ваш компьютер',
					'Часть компьютера, которая делает его работу быстрее',
					'Место, где хранятся фотографии'
				]
			});
			const question4 = new Question({
				text: 'Каким сочетанием клавиш можно открыть только что закрытую вкладку в большинстве браузеров? Выберите один ответ:',
				correct_answer: 'Ctrl + Shift + T',
				answers: [
					'Ctrl + Z',
					'Alt + F4',
					'Ctrl + C',
					'Ctrl + Shift + T'
				]
			});
			const question5 = new Question({
				text: 'Как вы называете специалиста, который занимается ремонтом компьютеров?',
				correct_answer: 'Программист',
				answers: [
					'Доктор',
					'Волшебник',
					'Программист',
					'Техник'
				]
			});
			const question6 = new Question({
				text: 'С помощью чего можно посещать веб-сайты в интернете?',
				correct_answer: 'Google Chrome',
				answers: [
					'Google Chrome',
					'Школьный учебник',
					'Фотоальбом',
					'Радио'
				]
			});
			const question7 = new Question({
				text: 'Что такое электронная почта (e-mail)?',
				correct_answer: 'Способ отправлять и получать сообщения через интернет',
				answers: [
					'Вид мобильного телефона',
					'Вид телевизора',
					'Способ отправлять и получать сообщения через интернет',
					'Место, где растут электронные деревья'
				]
			});
			const question8 = new Question({
				text: 'Что делает кнопка "Enter" на клавиатуре?',
				correct_answer: 'Переводит текст на следующую строку или выполняет команду',
				answers: [
					'Завершает игру',
					'Открывает стартовое меню',
					'Переводит текст на следующую строку или выполняет команду',
					'Включает экран компьютера'
				]
			});
			const question9 = new Question({
				text: 'Какой термин используется для обозначения большой сети компьютеров, объединенных вместе?',
				correct_answer: 'Интернет',
				answers: [
					'Группа',
					'Семья',
					'Интернет',
					'Школа'
				]
			});
			const question10 = new Question({
				text: 'Что такое "браузер" в компьютерном мире?',
				correct_answer: 'Программа, которая позволяет просматривать веб-сайты',
				answers: [
					'Человек, который чинит компьютеры',
					'Программа, которая позволяет просматривать веб-сайты',
					'Устройство для печати документов',
					'Место, где хранятся книги'
				]
			});
			const question11 = new Question({
				text: 'Что такое "сайт" в интернете?',
				correct_answer: 'Веб-страница или группа веб-страниц с информацией',
				answers: [
					'Маленький остров',
					'Способ отправки писем',
					'Веб-страница или группа веб-страниц с информацией',
					'Карта метро'
				]
			});
			const question12 = new Question({
				text: 'Какая кнопка на клавиатуре используется для удаления символов слева от текущей позиции курсора?',
				correct_answer: 'Backspace',
				answers: [
					'Ctrl',
					'Alt',
					'Backspace',
					'Shift'
				]
			});
			const question13 = new Question({
				text: 'Как называется маленькая программа на смартфоне или планшете, которая выполняет определенную задачу, такую как игра или калькулятор?',
				correct_answer: 'Приложение',
				answers: [
					'Планшет',
					'Пароль',
					'Приложение',
					'Крокодил'
				]
			});
			const question14 = new Question({
				text: 'Какой из перечисленных цветов чаще всего используется для гиперссылок в интернете?',
				correct_answer: 'Синий',
				answers: [
					'Зеленый',
					'Желтый',
					'Синий',
					'Фиолетовый'
				]
			});
			const question15 = new Question({
				text: 'Что делает кнопка "Print Screen" на компьютере или смартфоне?',
				correct_answer: 'Позволяет сделать фотографию экрана',
				answers: [
					'Позволяет сделать фотографию экрана',
					'Запускает компьютер',
					'Включает свет на клавиатуре',
					'Печатает текст'
				]
			});
			const question16 = new Question({
				text: 'Какой термин используется для описания защитного пароля, который нужно ввести, чтобы разблокировать смартфон или компьютер?',
				correct_answer: 'Пин-код',
				answers: [
					'Паспорт',
					'Пин-код',
					'Пингвин',
					'Пицца'
				]
			});
			const question17 = new Question({
				text: 'Рисунки, картины, чертежи, схемы, карты, фотографии – это примеры…',
				correct_answer: 'Графической информации',
				answers: [
					'Звуковой информации',
					'Графической информации',
					'Числовой информации',
					'Больших данных'
				]
			});
			const question18 = new Question({
				text: 'Кто такие Сири и Алиса?',
				correct_answer: 'Голосовые помощники',
				answers: [
					'Герои мультсериала',
					'Компьютерные вирусы',
					'Голосовые помощники',
					'Части компьютера'
				]
			});
			const question19 = new Question({
				text: 'Что вы будете делать, если компьютер не включается?',
				correct_answer: 'Проверю, подается ли питание на монитор и компьютер',
				answers: [
					'Проверю, подается ли питание на монитор и компьютер',
					'Проверю, подключен ли принтер',
					'Подожду 5 минут и попробую включить заново',
					'Ударю его, чтобы он заработал'
				]
			});
			const question20 = new Question({
				text: 'Что необходимо, чтобы перенести файлы с одного компьютера на другой?',
				correct_answer: 'Флеш-карта',
				answers: [
					'Клавиатура',
					'Флеш-карта',
					'Монитор',
					'Блок питания'
				]
			});
			const question21 = new Question({
				text: 'Чем отличается видео в TikTok от видео на YouTube?',
				correct_answer: 'Длительностью видео',
				answers: [
					'Качеством съемки',
					'Количеством просмотров',
					'Длительностью видео',
					'Количеством лайков'
				]
			});
			const question22 = new Question({
				text: 'Как называется функция социальных сетей, которая позволяет распознать лицо и наложить на него узор или изображение?',
				correct_answer: 'Маска',
				answers: [
					'Сито',
					'Решето',
					'Шляпа',
					'Маска'
				]
			});
			const question23 = new Question({
				text: 'Если Вам в социальной сети Instagram напишет Ваш любимый блогер и сообщит о выигрыше приза, как Вы поступите?',
				correct_answer: 'Удостоверюсь в том, что есть галочка подтверждения, и попрошу родителей помочь в коммуникации с блогером',
				answers: [
					'Порадуюсь и отправлю всю необходимую информацию для отправки выигрыша',
					'Удостоверюсь в том, что есть галочка подтверждения, и попрошу родителей помочь в коммуникации с блогером',
					'Удалю свой аккаунт',
					'Отправлю жалобу на его аккаунт'
				]
			});
			const question24 = new Question({
				text: 'Что такое "социальные сети" в интернете?',
				correct_answer: 'Специальные сайты, где люди могут общаться, делиться фотографиями и сообщениями',
				answers: [
					'Место, где можно купить игрушки',
					'Веб-страницы с информацией о животных',
					'Специальные сайты, где люди могут общаться, делиться фотографиями и сообщениями',
					'Интернет-магазины'
				]
			});
			const question25 = new Question({
				text: 'Какие из перечисленных устройств используются для подключения к интернету в беспроводной сети?',
				correct_answer: 'Роутер',
				answers: [
					'Роутер',
					'Мышь',
					'Велосипед',
					'Газовая плита'
				]
			});
			const question26 = new Question({
				text: 'Какое устройство используется для печати документов на бумаге?',
				correct_answer: 'Принтер',
				answers: [
					'Сканер',
					'Принтер',
					'Видеокамера',
					'Воздушный шар'
				]
			});
			const question27 = new Question({
				text: 'Как называется изображение, которое представляет собой маленький значок или кнопку на рабочем столе компьютера?',
				correct_answer: 'Иконка',
				answers: [
					'Смайлик',
					'Иконка',
					'Заголовок',
					'Пароль'
				]
			});
			const question28 = new Question({
				text: 'Что такое "блог"?',
				correct_answer: 'Онлайн-дневник, где люди делятся своими мыслями и опытом',
				answers: [
					'Книга с картинками',
					'Вид растения',
					'Онлайн-дневник, где люди делятся своими мыслями и опытом',
					'Игровая консоль'
				]
			});
			const question29 = new Question({
				text: 'Что делает кнопка "Обновить" в веб-браузере?',
				correct_answer: 'Позволяет обновить страницу и получить новую информацию',
				answers: [
					'Закрывает вкладку',
					'Позволяет обновить страницу и получить новую информацию',
					'Печатает текст',
					'Запускает игру'
				]
			});
			const question30 = new Question({
				text: 'Как называется процесс изменения размера изображения на компьютере?',
				correct_answer: 'Масштабирование',
				answers: [
					'Разрезка',
					'Увеличение',
					'Минимизация',
					'Масштабирование'
				]
			});
			question1.save();
			question2.save();
			question3.save();
			question4.save();
			question5.save();
			question6.save();
			question7.save();
			question8.save();
			question9.save();
			question10.save();
			question11.save();
			question12.save();
			question13.save();
			question14.save();
			question15.save();
			question16.save();
			question17.save();
			question18.save();
			question19.save();
			question20.save();
			question21.save();
			question22.save();
			question23.save();
			question24.save();
			question25.save();
			question26.save();
			question27.save();
			question28.save();
			question29.save();
			question30.save();
			test1.questions.push(question1);
			test1.questions.push(question2);
			test1.questions.push(question3);
			test1.questions.push(question4);
			test1.questions.push(question5);
			test1.questions.push(question6);
			test1.questions.push(question7);
			test1.questions.push(question8);
			test1.questions.push(question9);
			test1.questions.push(question10);
			test1.questions.push(question11);
			test1.questions.push(question12);
			test1.questions.push(question13);
			test1.questions.push(question14);
			test1.questions.push(question15);
			test1.questions.push(question16);
			test1.questions.push(question17);
			test1.questions.push(question18);
			test1.questions.push(question19);
			test1.questions.push(question20);
			test1.questions.push(question21);
			test1.questions.push(question22);
			test1.questions.push(question23);
			test1.questions.push(question24);
			test1.questions.push(question25);
			test1.questions.push(question26);
			test1.questions.push(question27);
			test1.questions.push(question28);
			test1.questions.push(question29);
			test1.questions.push(question30);
			test1.save();
			test2.save();
			test3.save();
			res.json("ok")
		} catch (e) {
			console.log(e);
		}
	}


}


module.exports = new AuthController();