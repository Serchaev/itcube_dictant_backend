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

			const question31 = new Question({
				text: 'Что такое операционная система на компьютере?',
				correct_answer: 'Программа для управления компьютером',
				answers: [
					'Программа для обработки фотографий',
					'Система для хранения фильмов',
					'Программа для управления компьютером',
					'Браузер для интернета'
				]
			});
			const question32 = new Question({
				text: 'Какой термин используется для описания места, где компьютеры и другие устройства соединены вместе для обмена информацией?',
				correct_answer: 'Сеть',
				answers: [
					'Чат',
					'Веб-сайт',
					'Сеть',
					'Фотография'
				]
			});
			const question33 = new Question({
				text: 'Какое сочетание клавиш на клавиатуре позволяет отменить последнее действие?',
				correct_answer: 'Ctrl+Z',
				answers: [
					'Enter',
					'Esc',
					'Ctrl+Z',
					'Shift+Delete'
				]
			});
			const question34 = new Question({
				text: 'Что такое "URL"?',
				correct_answer: 'Ссылка на веб-страницу',
				answers: [
					'Цветной текст',
					'Ссылка на веб-страницу',
					'Рисунок',
					'Электронная почта'
				]
			});
			const question35 = new Question({
				text: 'Какой термин описывает процесс изменения размера изображения на компьютере?',
				correct_answer: 'Масштабирование',
				answers: [
					'Перевод',
					'Обновление',
					'Масштабирование',
					'Очистка'
				]
			});
			const question36 = new Question({
				text: 'Что такое "веб-браузер"?',
				correct_answer: 'Программа для просмотра веб-страниц',
				answers: [
					'Программа для редактирования текста',
					'Сеть, подключенная к компьютеру',
					'Программа для просмотра веб-страниц',
					'Место для хранения фотографий'
				]
			});
			const question37 = new Question({
				text: 'Какие устройства используются для ввода информации в компьютер?',
				correct_answer: 'Клавиатура и мышь',
				answers: [
					'Принтер и монитор',
					'Клавиатура и мышь',
					'Сканер и флеш-накопитель',
					'МВидеокамера и микрофон'
				]
			});
			const question38 = new Question({
				text: 'Что такое "сетевой адрес" или "IP-адрес"?',
				correct_answer: 'Адрес в интернете, по которому можно найти компьютер или устройство',
				answers: [
					'Адрес дома',
					'Номер телефона',
					'Адрес в интернете, по которому можно найти компьютер или устройство',
					'Школьный номер'
				]
			});
			const question39 = new Question({
				text: 'Какой термин описывает место, где компьютер хранит временные данные, чтобы ускорить доступ к ним?',
				correct_answer: 'Буфер',
				answers: [
					'Буфер',
					'Загрузка',
					'Микросхема',
					'Монитор'
				]
			});
			const question40 = new Question({
				text: 'Какой термин используется для описания места, где хранятся файлы и папки на компьютере?',
				correct_answer: 'Жесткий диск',
				answers: [
					'Спам',
					'Архив',
					'Документ',
					'Жесткий диск'
				]
			});
			const question41 = new Question({
				text: 'Какой термин описывает место, где можно найти информацию в Интернете, используя ключевые слова?',
				correct_answer: 'Поисковик',
				answers: [
					'Словарь',
					'Поисковик',
					'Архив',
					'Сеть'
				]
			});
			const question42 = new Question({
				text: 'Что такое "мобильное приложение"?',
				correct_answer: 'Программа, которая работает на смартфоне или планшете',
				answers: [
					'Мобильный телефон',
					'Программа, которая работает на смартфоне или планшете',
					'Музыкальный инструмент',
					'Компьютерная игра'
				]
			});
			const question43 = new Question({
				text: 'Как называется специальное устройство, которое преобразует рукописный текст или рисунок в цифровую форму на компьютере?',
				correct_answer: 'Сканер',
				answers: [
					'Планшет',
					'Сканер',
					'Принтер',
					'Монитор'
				]
			});
			const question44 = new Question({
				text: 'Что такое "Wi-Fi"?',
				correct_answer: 'Беспроводная передача данных',
				answers: [
					'Беспроводная передача данных',
					'Бесплатный интернет',
					'Быстрый интерфейс',
					'Белый фон'
				]
			});
			const question45 = new Question({
				text: 'Какие устройства можно подключить к компьютеру через порты USB?',
				correct_answer: 'Различные периферийные устройства, такие как принтеры, флеш-накопители и веб-камеры',
				answers: [
					'Только монитор',
					'Только клавиатуру и мышь',
					'Различные периферийные устройства, такие как принтеры, флеш-накопители и веб-камеры',
					'Только внешние жесткие диски'
				]
			});
			const question46 = new Question({
				text: 'Какой термин описывает место, где можно хранить файлы и документы в интернете?',
				correct_answer: 'Облако',
				answers: [
					'Облако',
					'Молния',
					'Гроза',
					'Ветер'
				]
			});
			const question47 = new Question({
				text: 'Как называется программный инструмент для создания и редактирования текстовых документов?',
				correct_answer: 'Текстовый редактор',
				answers: [
					'Фотошоп',
					'Веб-браузер',
					'Текстовый редактор',
					'Сканер'
				]
			});
			const question48 = new Question({
				text: 'Какой термин описывает процесс просмотра веб-страниц в Интернете?',
				correct_answer: 'Серфинг',
				answers: [
					'Поиск',
					'Серфинг',
					'Загрузка',
					'Печать'
				]
			});
			const question49 = new Question({
				text: 'Как называется устройство, которое отображает текст, изображения и видео на компьютере?',
				correct_answer: 'Монитор',
				answers: [
					'Процессор',
					'Монитор',
					'Сканер',
					'Веб-камера'
				]
			});
			const question50 = new Question({
				text: 'Какой термин используется для описания программного обеспечения, которое может автоматически выполнять задачи на компьютере?',
				correct_answer: 'Бот',
				answers: [
					'Бот',
					'Процессор',
					'Антивирус',
					'Флеш-накопитель'
				]
			});
			const question51 = new Question({
				text: 'Что такое "браузерная история"?',
				correct_answer: 'Список ваших посещенных веб-страниц',
				answers: [
					'Список ваших посещенных веб-страниц',
					'Список песен на вашем музыкальном плеере',
					'Список покупок в интернет-магазине',
					'Список ваших друзей в социальной сети'
				]
			});
			const question52 = new Question({
				text: 'Что такое "резервное копирование данных"?',
				correct_answer: 'Процесс сохранения копии ваших данных, чтобы не потерять их в случае поломки компьютера',
				answers: [
					'Процесс удаления данных с компьютера',
					'Процесс сохранения копии ваших данных, чтобы не потерять их в случае поломки компьютера',
					'Процесс отправки данных на другой компьютер',
					'Процесс печати данных на бумаге'
				]
			});
			const question53 = new Question({
				text: 'Какие устройства позволяют играть в видеоигры, подключаясь к телевизору или монитору?',
				correct_answer: 'Консоли',
				answers: [
					'Смартфоны',
					'Планшеты',
					'Консоли',
					'Ноутбуки'
				]
			});
			const question54 = new Question({
				text: 'Что такое "электронная книга"?',
				correct_answer: 'Устройство для чтения книг в цифровом формате',
				answers: [
					'Книга, написанная на компьютере',
					'Электронное письмо',
					'Устройство для чтения книг в цифровом формате',
					'Веб-сайт с книгами'
				]
			});
			const question55 = new Question({
				text: 'Какие устройства можно подключить к компьютеру через порты HDMI?',
				correct_answer: 'Монитор, телевизор или проектор',
				answers: [
					'Принтер и сканер',
					'Только клавиатуру',
					'Монитор, телевизор или проектор',
					'Только веб-камеру'
				]
			});
			const question56 = new Question({
				text: 'Что такое "облако" в компьютерных терминах?',
				correct_answer: 'Место для хранения данных и файлов в интернете',
				answers: [
					'Место для хранения фотографий',
					'Место для хранения данных и файлов в интернете',
					'Видеоигра в сети',
					'Программа для создания анимации'
				]
			});
			const question57 = new Question({
				text: 'Что означает сокращение "PDF"?',
				correct_answer: 'Формат документа, который сохраняет исходное форматирование',
				answers: [
					'Программа для создания анимации',
					'Формат документа, который сохраняет исходное форматирование',
					'Музыкальный инструмент',
					'Веб-сайт'
				]
			});
			const question58 = new Question({
				text: 'Какой термин используется для описания специального кода, который защищает доступ к вашей учетной записи в Интернете?',
				correct_answer: 'Пароль',
				answers: [
					'Пароль',
					'Имя пользователя',
					'Электронная почта',
					'Веб-сайт'
				]
			});
			const question59 = new Question({
				text: 'Что такое "виртуальная реальность"?',
				correct_answer: 'Технология, которая позволяет пользователям переживать виртуальные события с помощью специальных очков и устройств',
				answers: [
					'Мир компьютерных игр',
					'Термин для описания вымышленных миров',
					'Технология, которая позволяет пользователям переживать виртуальные события с помощью специальных очков и устройств',
					'Процесс создания анимации'
				]
			});
			const question60 = new Question({
				text: 'Что такое "файловая система"?',
				correct_answer: 'Специальная система для организации и хранения файлов на компьютере',
				answers: [
					'Программа для создания анимации',
					'Специальная система для организации и хранения файлов на компьютере',
					'Процесс создания резервной копии данных',
					'Место для хранения фотографий'
				]
			});

			const question61 = new Question({
				text: 'Что такое "блокчейн" и какие области его применения вы можете назвать?',
				correct_answer: 'Технология для шифрования личных сообщений',
				answers: [
					'Система для хранения и передачи данных, применяемая в медицине и финансах', 
					'Технология для шифрования личных сообщений', 
					'Метод создания виртуальных миров в компьютерных играх', 
					'Аппаратное обеспечение компьютера'
				]
			});
			const question62 = new Question({
				text: 'Какие языки программирования чаще всего используются для разработки мобильных приложений?',
				correct_answer: 'Swift и Kotlin',
				answers: [
					'Java и Python',
					'HTML и CSS',
					'C++ и Ruby',
					'Swift и Kotlin'
				]
			});
			const question63 = new Question({
				text: 'Что такое "компьютерное зрение" и какие задачи оно может решать?',
				correct_answer: 'Способность компьютеров анализировать и понимать изображения и видео',
				answers: [
					'Технология определения болезней глаз',
					'Способность компьютеров анализировать и понимать изображения и видео',
					'Метод восстановления удаленных файлов',
					'Программа для создания трехмерных моделей'
				]
			});
			const question64 = new Question({
				text: 'Какие методы шифрования данных существуют и как они обеспечивают конфиденциальность информации?',
				correct_answer: 'RSA и AES шифрование для защиты данных от несанкционированного доступа',
				answers: [
					'Публичное разглашение данных',
					'RSA и AES шифрование для защиты данных от несанкционированного доступа',
					'Сжатие данных для экономии места на диске',
					'Отправка данных по обычной почте'
				]
			});
			const question65 = new Question({
				text: 'Что такое "электронная коммерция" (e-commerce) и какие популярные платформы для онлайн-торговли существуют?',
				correct_answer: 'Онлайн-торговля, включая покупку и продажу товаров и услуг в интернете',
				answers: [
					'Процесс создания электронных документов',
					'Онлайн-торговля, включая покупку и продажу товаров и услуг в интернете',
					'Продажа электронных книг',
					'Платформы для создания музыки'
				]
			});
			const question66 = new Question({
				text: 'Какие технологии используются в разработке игр для виртуальной реальности (VR) и дополненной реальности (AR)?',
				correct_answer: ' Специальные очки и датчики для отслеживания движений',
				answers: [
					'Технология искусственного интеллекта',
					'Специальные очки и датчики для отслеживания движений',
					'Бумажные карты для создания игровых миров',
					'Запись звуковых эффектов'
				]
			});
			const question67 = new Question({
				text: 'Что означает аббревиатура "URL"?',
				correct_answer: 'Unified Resource Locator',
				answers: [
					'Unified Resource Locator',
					'User-Related Link',
					'Universal Routing Language',
					'User Research Laboratory'
				]
			});
			const question68 = new Question({
				text: 'Какая операционная система используется в большинстве смартфонов iPhone?',
				correct_answer: 'iOS',
				answers: [
					'Android',
					'MacOS',
					'iOS',
					'Linux'
				]
			});
			const question69 = new Question({
				text: 'Какая компания разработала браузер Google Chrome?',
				correct_answer: 'Google',
				answers: [
					'Mozilla',
					'Apple',
					'Google',
					'Microsoft'
				]
			});
			const question70 = new Question({
				text: 'Что означает аббревиатура "PDF"?',
				correct_answer: 'Portable Document Format',
				answers: [
					'Personal Document Format',
					'Portable Document Format',
					'Print Document File',
					'Program Data File'
				]
			});
			const question71 = new Question({
				text: 'Как называется технология передачи данных, которая использует беспроводные сети для подключения устройств к Интернету?',
				correct_answer: 'Wi-Fi',
				answers: [
					'Bluetooth',
					'Wi-Fi',
					'Ethernet',
					'USB'
				]
			});
			const question72 = new Question({
				text: 'Какой вид информационной атаки основывается на обмане пользователей с целью получения их личных данных, таких как пароли и банковские данные?',
				correct_answer: 'Фишинг',
				answers: [
					'Вирус',
					'Фишинг',
					'Ддос-атака',
					'Шифрование данных'
				]
			});
			const question73 = new Question({
				text: 'Какая технология используется для проведения видеоконференций и обмена видео-сообщениями через Интернет?',
				correct_answer: 'VoIP',
				answers: [
					'GPS',
					'HTTP',
					'VoIP',
					'HDMI'
				]
			});
			const question74 = new Question({
				text: 'Какой из следующих языков программирования часто используется для разработки баз данных?',
				correct_answer: 'SQL',
				answers: [
					'Java',
					'C#',
					'Ruby',
					'SQL'
				]
			});
			const question75 = new Question({
				text: 'Какая технология обеспечивает быстрый доступ к данным на жестком диске, памяти и других устройствах хранения?',
				correct_answer: 'SSD',
				answers: [
					'USB',
					'SSD',
					'Bluetooth',
					'HDMI'
				]
			});
			const question76 = new Question({
				text: 'Что означает аббревиатура "HTML"?',
				correct_answer: 'Hyper Text Markup Language',
				answers: [
					'Hyper Text Markup Language',
					'High Tech Multimedia Language',
					'Home Text Message Language',
					'Hyper Transfer Machine Language'
				]
			});
			const question77 = new Question({
				text: 'Какая функция выполняется брандмауэром в компьютерной системе?',
				correct_answer: 'Защита от вредоносных программ и несанкционированного доступа',
				answers: [
					'Отправка и прием электронной почты',
					'Защита от вредоносных программ и несанкционированного доступа',
					'Организация сетевых игр',
					'Печать документов'
				]
			});
			const question78 = new Question({
				text: 'Какая технология позволяет устройствам, таким как смартфоны и планшеты, определять свое местоположение на Земле?',
				correct_answer: 'GPS',
				answers: [
					'DVI',
					'GPS',
					'VGA',
					'USB'
				]
			});
			const question79 = new Question({
				text: 'Какая из следующих технологий используются для распознавания отпечатков пальцев и разблокировки устройств?',
				correct_answer: 'Биометрические датчики',
				answers: [
					'Искусственный интеллект',
					'RFID-чипы',
					'Биометрические датчики',
					'Распознавание лиц'
				]
			});
			const question80 = new Question({
				text: 'Какие из следующих устройств можно назвать "интернетом вещей" (IoT)?',
				correct_answer: 'Холодильник, который может заказывать продукты автоматически',
				answers: [
					'Холодильник, который может заказывать продукты автоматически',
					'Шахматная доска',
					'Карманный фонарик',
					'Велосипед'
				]
			});
			const question81 = new Question({
				text: 'Какой термин используется для описания акта незаконного вторжения в компьютерные системы с целью кражи данных или разрушения информации?',
				correct_answer: 'Кибератака',
				answers: [
					'Хактивизм',
					'Хакер',
					'Вирус',
					'Кибератака'
				]
			});
			const question82 = new Question({
				text: 'Какая технология позволяет устройствам подключаться к Интернету через мобильные сети?',
				correct_answer: '3G/4G/5G',
				answers: [
					'NFC',
					'GPS',
					'Bluetooth',
					'3G/4G/5G'
				]
			});
			const question83 = new Question({
				text: 'Что означает аббревиатура "AI"?',
				correct_answer: 'Искусственный интеллект',
				answers: [
					'Альтернативная интеграция',
					'Автоматический интерфейс',
					'Искусственный интеллект',
					'Административная информация'
				]
			});
			const question84 = new Question({
				text: 'Какой вид атаки на компьютерные системы предполагает создание множества запросов к серверу с целью перегрузки его ресурсов и остановки его работы?',
				correct_answer: 'Ддос-атака',
				answers: [
					'Фишинг',
					'Ддос-атака',
					'Вирус',
					'Хактивизм'
				]
			});
			const question85 = new Question({
				text: 'Какая технология позволяет устройствам взаимодействовать с окружающим миром, определяя физические объекты в реальном времени?',
				correct_answer: 'Дополненная реальность',
				answers: [
					'Дополненная реальность',
					'Электронная коммерция',
					'Искусственный интеллект',
					'Облачное хранилище'
				]
			});
			const question86 = new Question({
				text: 'Какие из следующих языков программирования чаще всего используются для создания веб-сайтов?',
				correct_answer: 'HTML и CSS',
				answers: [
					'C++ и Java',
					'Python и Ruby',
					'HTML и CSS',
					'SQL и PHP'
				]
			});
			const question87 = new Question({
				text: 'Какой вид программного обеспечения предназначен для защиты компьютера от вредоносных программ и атак?',
				correct_answer: 'Антивирусное программное обеспечение',
				answers: [
					'Офисные приложения',
					'Антивирусное программное обеспечение',
					'Медиаплееры',
					'Графические редакторы'
				]
			});
			const question88 = new Question({
				text: 'Какой термин описывает процесс создания и распространения копий программного обеспечения без разрешения правообладателя?',
				correct_answer: 'Пиратство',
				answers: [
					'Вирус',
					'Пиратство',
					'Антивирус',
					'Хакерство'
				]
			});
			const question89 = new Question({
				text: 'Какой термин описывает акт хищения чужой интеллектуальной собственности и представления ее как своей?',
				correct_answer: 'Плагиат',
				answers: [
					'Плагиат',
					'Авторское право',
					'Копирование',
					'Распространение'
				]
			});
			const question90 = new Question({
				text: 'Какой термин описывает процесс создания внешнего облика и дизайна веб-сайта?',
				correct_answer: 'Верстка',
				answers: [
					'Верстка',
					'Программирование',
					'Шифрование',
					'Анализ данных'
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
			question31.save();
			question32.save();
			question33.save();
			question34.save();
			question35.save();
			question36.save();
			question37.save();
			question38.save();
			question39.save();
			question40.save();
			question41.save();
			question42.save();
			question43.save();
			question44.save();
			question45.save();
			question46.save();
			question47.save();
			question48.save();
			question49.save();
			question50.save();
			question51.save();
			question52.save();
			question53.save();
			question54.save();
			question55.save();
			question56.save();
			question57.save();
			question58.save();
			question59.save();
			question60.save();
			question61.save();
			question62.save();
			question63.save();
			question64.save();
			question65.save();
			question66.save();
			question67.save();
			question68.save();
			question69.save();
			question70.save();
			question71.save();
			question72.save();
			question73.save();
			question74.save();
			question75.save();
			question76.save();
			question77.save();
			question78.save();
			question79.save();
			question80.save();
			question81.save();
			question82.save();
			question83.save();
			question84.save();
			question85.save();
			question86.save();
			question87.save();
			question88.save();
			question89.save();
			question90.save();
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
			test2.questions.push(question31);
			test2.questions.push(question32);
			test2.questions.push(question33);
			test2.questions.push(question34);
			test2.questions.push(question35);
			test2.questions.push(question36);
			test2.questions.push(question37);
			test2.questions.push(question38);
			test2.questions.push(question39);
			test2.questions.push(question40);
			test2.questions.push(question41);
			test2.questions.push(question42);
			test2.questions.push(question43);
			test2.questions.push(question44);
			test2.questions.push(question45);
			test2.questions.push(question46);
			test2.questions.push(question47);
			test2.questions.push(question48);
			test2.questions.push(question49);
			test2.questions.push(question50);
			test2.questions.push(question51);
			test2.questions.push(question52);
			test2.questions.push(question53);
			test2.questions.push(question54);
			test2.questions.push(question55);
			test2.questions.push(question56);
			test2.questions.push(question57);
			test2.questions.push(question58);
			test2.questions.push(question59);
			test2.questions.push(question60);
			test3.questions.push(question61);
			test3.questions.push(question62);
			test3.questions.push(question63);
			test3.questions.push(question64);
			test3.questions.push(question65);
			test3.questions.push(question66);
			test3.questions.push(question67);
			test3.questions.push(question68);
			test3.questions.push(question69);
			test3.questions.push(question70);
			test3.questions.push(question71);
			test3.questions.push(question72);
			test3.questions.push(question73);
			test3.questions.push(question74);
			test3.questions.push(question75);
			test3.questions.push(question76);
			test3.questions.push(question77);
			test3.questions.push(question78);
			test3.questions.push(question79);
			test3.questions.push(question80);
			test3.questions.push(question81);
			test3.questions.push(question82);
			test3.questions.push(question83);
			test3.questions.push(question84);
			test3.questions.push(question85);
			test3.questions.push(question86);
			test3.questions.push(question87);
			test3.questions.push(question88);
			test3.questions.push(question89);
			test3.questions.push(question90);
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