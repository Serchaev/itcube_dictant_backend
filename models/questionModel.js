const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
	text: String,
	correct_answer: String,
	test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' }
});

module.exports = mongoose.model("Question", questionSchema);