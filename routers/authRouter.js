const Router = require("express");
const controller = require("../controllers/authController");
const { check, body } = require("express-validator");
const authMiddleware = require('../middlewares/authMiddleware');
// const authMiddleware = require("../middlewares/authMiddleware.js");
// const moderMiddleware = require("../middlewares/moderMiddleware.js");

const router = Router();

router.post("/registration",
	// [

	// check("name", "Имя должно быть больше 3 и меньше 30 символов").isLength({ min: 3, max: 30 }),
	// check("email", "Почта должна быть больше 3 и меньше 70 символов").isLength({ min: 3, max: 70 }),
	// check("password", "Пароль должен быть больше 8 и меньше 30 символов").isLength({ min: 8, max: 30 }),
	// ],
	body('login').isLength({ min: 4, max: 30 }), body('password').isLength({ min: 8, max: 30 }), controller.registration);

router.post("/login", controller.login);

router.post("/logout", controller.logout);

router.post("/refresh", controller.refresh);

router.get("/getUsers", controller.getUsers);

router.get("/getUserData", authMiddleware, controller.getUserData);

router.put("/updateUserData", authMiddleware, controller.updateUserData);

router.get("/ping", controller.ping);

module.exports = router;