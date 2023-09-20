const userModel = require('../models/userModel');
const tokenModel = require('../models/tokenModel');
const bcrypt = require('bcrypt');
const tokenService = require('./tokenService');
const UserDto = require('../dtos/userDto');

class AuthService {
	async registration(first_name, last_name, age, school, email, phone_number, login, password) {
		const candidate = await userModel.findOne({ login });
		if (candidate) {
			throw new Error(`Пользователь с логином - ${login} уже существует`);
		}
		const hashPassword = bcrypt.hashSync(password, 7);
		const user = await userModel({ first_name, last_name, age, school, email, phone_number, login, password: hashPassword });
		const userDto = new UserDto(user);
		const tokens = await tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		user.save();
		return {
			...tokens,
			user: userDto,
		}
	}

	async login(login, password) {
		const user = await userModel.findOne({ login });
		if (!user) {
			throw new Error(`Пользователя с логином - ${login} не существует`);
		}
		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			throw new Error(`Неверный пароль`);
		}
		const userDto = new UserDto(user);
		const tokens = await tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(user, tokens.refreshToken);
		return {
			...tokens,
			user: userDto,
		}
	}

	async logout(refreshToken) {
		const token = await tokenService.deleteToken(refreshToken);
		return token;
	}

	async refresh(refreshToken) {
		console.log("authservice", refreshToken)
		if (!refreshToken) {
			throw new Error(`Невалидный refreshToken токен`);
		}
		const authData = await tokenService.validateRefreshToken(refreshToken);
		console.log(1, authData)
		const tokenData = await tokenService.findToken(refreshToken);
		console.log(2, tokenData)
		if (!authData || !tokenData) {
			throw new Error(`Некоректный refreshToken токен`)
		}
		const user = await userModel.findById(authData.id);

		const userDto = new UserDto(user);
		const tokens = await tokenService.generateTokens({ ...userDto });
		// await tokenService.updateToken(user, tokens.refreshToken);
		console.log("tokenData.refreshToken", tokenData.refreshToken)
		tokenData.refreshToken = tokens.refreshToken;
		console.log("tokenData.refreshToken2", tokenData.refreshToken)
		tokenData.save();
		return {
			...tokens,
			user: userDto,
		}
	}
}

module.exports = new AuthService();