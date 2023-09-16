const Router = require("express");
const controller = require("../controllers/addController");
const { check, body } = require("express-validator");
const authMiddleware = require('../middlewares/authMiddleware');

const router = Router();


router.get("/add", controller.add);

module.exports = router;