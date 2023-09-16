const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
	text: String,
	correct_answer: String,
	answers: [String] // Массив вариантов ответов
});

module.exports = mongoose.model("Question", questionSchema);