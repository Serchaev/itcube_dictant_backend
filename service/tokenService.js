const jwt = require('jsonwebtoken');
const tokenModel = require("../models/tokenModel.js");


class TokenService {
	async generateTokens(payload) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: "1h" });
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: "24h" });
		return {
			accessToken,
			refreshToken
		}
	}

	async saveToken(user, refreshToken) {
		// const tokenData = await tokenModel.findOne({ user: user });
		// console.log(`tokenData`, tokenData);
		// if (tokenData) {
		// 	tokenData.refreshToken = refreshToken;
		// 	tokenData.save();
		// 	return
		// }
		const token = await tokenModel.create({ user: user, refreshToken })
		return token;
	}

	async deleteToken(refreshToken) {
		const token = await tokenModel.deleteOne({ refreshToken });
		return token;
	}

	async validateAccessToken(accessToken) {
		try {
			const token = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
			return token;
		} catch (e) {
			return null;
		}

	}

	async validateRefreshToken(refreshToken) {
		try {
			const token = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
			return token;
		} catch (e) {
			return null;
		}

	}

	async findToken(refreshToken) {
		const tokenData = await tokenModel.findOne({ refreshToken });
		return tokenData;

	}
}

module.exports = new TokenService();