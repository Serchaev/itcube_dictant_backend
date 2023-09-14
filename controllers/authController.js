// const User = require("../models/userModel.js");
// const Role = require("../models/roleModel.js");
const Token = require("../models/tokenModel.js");
// const bcrypt = require("bcryptjs");
// const { validationResult } = require("express-validator");
// const jwt = require("jsonwebtoken");
// const fs = require("fs");

class AuthController {
	async registration(req, res, next) {
		try {

		} catch (e) {
			console.log(e);
		}
	}

	async login(req, res, next) {
		try {

		} catch (e) {
			console.log(e);
		}
	}

	async logout(req, res, next) {
		try {

		} catch (e) {
			console.log(e);
		}
	}

	async refresh(req, res, next) {
		try {

		} catch (e) {
			console.log(e);
		}
	}

	async ping(req, res, next) {
		try {
			console.log("pong");
			res.json('pong');
		} catch (e) {
			console.log(e);
		}
	}


}


module.exports = new AuthController();