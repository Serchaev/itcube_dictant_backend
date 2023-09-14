const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
	name: String,
	age_group: String,
	description: String,
	start_time: Date,
	end_time: Date,
	max_attempts: Number
});

module.exports = mongoose.model("Test", testSchema);