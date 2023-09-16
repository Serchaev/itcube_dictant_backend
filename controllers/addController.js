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
				text: 'Какой цвет у неба?',
				correct_answer: 'Синий',
				answers: ['Красный', 'Зеленый', 'Синий', 'Желтый']
			});
			const question2 = new Question({
				text: 'Сколько месяцев в году?',
				correct_answer: '12',
				answers: ['10', '11', '12', '13']
			});
			question1.save();
			question2.save();
			test1.questions.push(question1);
			test1.questions.push(question2);
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