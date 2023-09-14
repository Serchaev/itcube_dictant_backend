const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
	student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
	question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
	selected_answer: String,
	is_correct: { type: Boolean, required: true }
});

module.exports = mongoose.model("Answer", answerSchema);