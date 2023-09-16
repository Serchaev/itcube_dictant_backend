const Router = require("express");
const controller = require("../controllers/testController");
const { check, body } = require("express-validator");
const authMiddleware = require('../middlewares/authMiddleware');
// const authMiddleware = require("../middlewares/authMiddleware.js");
// const moderMiddleware = require("../middlewares/moderMiddleware.js");

const router = Router();


router.get("/getQuestions", authMiddleware, controller.getQuestions);

router.post("/submitAnswers", authMiddleware, controller.submitAnswers);

module.exports = router;