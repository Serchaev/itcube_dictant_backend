const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
	name: String,
	age_group: Number,
	description: String,
	max_questions: Number, // Максимальное количество вопросов в тесте (например, 30)
	questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }] // Связь с вопросами
});

module.exports = mongoose.model("Test", testSchema);