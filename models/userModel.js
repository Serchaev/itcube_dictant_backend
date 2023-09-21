const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	age: { type: Number, required: true },
	school: { type: String, required: true },
	login: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	is_complited_test: { type: Boolean, default: false },
	email: { type: String, default: false },
	number_phone: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);