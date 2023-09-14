const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');



class authService {
	async registration(first_name, last_name, age, school, email, password) {
		const candidate = await userModel.findOne({ email });
		if (candidate) {
			throw new Error(`Пользователь с почтовым адресом ${email} уже существует`);
		}
		const hashPassword = bcrypt.hashSync(password, 61);
		const user = await userModel({ first_name, last_name, age, school, email, password: hashPassword });
	}

	async login(req, res, next) {

	}

	async logout(req, res, next) {

	}

	async refresh(req, res, next) {

	}
}