// const User = require("../models/userModel.js");
// const Role = require("../models/roleModel.js");
const Token = require("../models/tokenModel.js");
const userModel = require('../models/userModel.js');
// const bcrypt = require("bcryptjs");
// const { validationResult } = require("express-validator");
// const jwt = require("jsonwebtoken");
// const fs = require("fs");
const authService = require('../service/authService.js');
const { validationResult } = require("express-validator");

class AuthController {
	async registration(req, res, next) {
		console.log("INFO '/registration' POST");
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ message: "Ошибка при регистрации", errors });
		}
		try {
			const { first_name, last_name, age, school, email, phone_number, login, password } = req.body;
			const authData = await authService.registration(first_name, last_name, age, school, email, phone_number, login, password);
			return res.json(authData);
		} catch (e) {
			console.log(e);
			if (e.message.contains('уже существует')) {
				return res.status(409).json({ errors: [`${e}`,] });
			}
			return res.status(500).json(e);
		}
	}

	async login(req, res, next) {
		try {
			console.log("INFO '/login' POST");
			const { login, password } = req.body;
			const authData = await authService.login(login, password);
			return res.json(authData);
		} catch (e) {
			if (e.message.includes("Неверный пароль")) {
				return res.status(403).json(e);
			}
			return res.status(500).json(e);

		}
	}

	async logout(req, res, next) {
		try {
			console.log("INFO '/logout' POST");
			const { refreshToken } = req.body;
			const authData = await authService.logout(refreshToken);
			res.json(authData);
		} catch (e) {
			console.log(e);
			return res.status(500).json(e);
		}
	}

	async refresh(req, res, next) {
		try {
			console.log("INFO '/refresh' POST");
			console.log(req.body);
			const { refreshToken } = req.body;
			console.log("req.body", refreshToken)
			const authData = await authService.refresh(refreshToken);
			res.json(authData);

		} catch (e) {
			console.log(e);
			res.status(401).json({ errors: ["Ошибка авторизации, перезайдите в аккаунт или попробуйте позже"] });
		}
	}

	async getUsers(req, res, next) {
		console.log("INFO '/getUsers' POST");
		try {
			const users = await userModel.find();
			const resUsers = users.map(e => {
				return {
					"login": e.login
				}
			});
			res.json(resUsers);
		} catch (e) {
			console.log(e);
			return res.status(500).json(e);
		}
	}

	async getUserData(req, res, next) {
		console.log("INFO '/getUserData' POST");
		try {
			const user = req.user;
			console.log("user", user)
			const userData = await userModel.findOne({ _id: user.id });
			console.log("userData", userData)
			res.json({
				id: userData._id,
				first_name: userData.first_name,
				last_name: userData.last_name,
				age: userData.age,
				school: userData.school,
				login: userData.login,
				number_phone: userData.number_phone,
				is_complited_test: userData.is_complited_test,
				scores: userData.scores,
				email: userData.email,
				phone_number: userData.phone_number
			});
		} catch (e) {
			console.log(e);
			return res.status(500).json(e);
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