const jwt = require("jsonwebtoken");
const tokenService = require("../service/tokenService");

module.exports = async function (req, res, next) {
	try {
		const authorizationHeader = req.headers.authorization;
		// console.log("authorizationHeader", authorizationHeader);
		if (!authorizationHeader) {
			console.log("Не найден ключ авторизации в заголовках");
			return res.status(401).json({ errors: ["Ошибка авторизации, перезайдите в аккаунт"] });
		}
		const accessToken = authorizationHeader.split(" ")[1];
		if (!accessToken) {
			console.log("Не найден токен в заголовках");
			return res.status(401).json({ errors: ["Ошибка авторизации, перезайдите в аккаунт"] });
		}
		console.log(accessToken);
		const userData = await tokenService.validateAccessToken(accessToken);
		if (!userData) {
			console.log("Access токен не прошел валидацию");
			return res.status(401).json({ errors: ["Ошибка авторизации, перезайдите в аккаунт"] });
		}
		req.user = userData;
		next();
	} catch (e) {
		console.log("Ошибка мидлваря");
		return res.status(500).json({ errors: ["Ошибка, попробуйте позже"] });
	}
}