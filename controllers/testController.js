const authService = require('../service/authService.js');
const { validationResult } = require("express-validator");
const testModel = require('../models/testModel.js');
const questionModel = require('../models/questionModel.js');
const answerModel = require('../models/answerModel.js');
const { text } = require('express');

class TestController {
	async getQuestions(req, res, next) {
		console.log("INFO '/getQuestions' GET");
		try {
			let age = req.user.age;
			if (age >= 7 && age < 10) {
				age = 7;
			} else if (age >= 10 && age < 14) {
				age = 10;
			} else if (age >= 14 && age < 18) {
				age = 14;
			}

			age = 7;
			const test = await testModel.findOne({ age_group: age }).populate('questions');
			test.questions = test.questions.map(e => {
				console.log(e);
				e.correct_answer = null;
				console.log(e);
				return e
			})


			res.json(test);


		} catch (e) {
			console.log(e);
			res.status(409).json({ errors: [`${e}`,] });
		}
	}

	async submitAnswers(req, res, next) {
		console.log("INFO '/submitAnswers' POST");
		try {

			const id = req.user.id;

			const submittedAnswers = req.body.answers;
			console.log(submittedAnswers);


			await submittedAnswers.forEach(async e => {
				const correct_answer = await questionModel.findOne({ _id: e.questionId });
				const is_correct = e.selectedAnswer === correct_answer.correct_answer;
				await answerModel.create({ student: id, question: e.questionId, selected_answer: e.selectedAnswer, is_correct: is_correct });
			});


			res.json("ok");
		} catch (e) {
			console.log(e);
		}
	}
}


module.exports = new TestController();