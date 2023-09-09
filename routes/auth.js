const router = require("express").Router();
const authController = require("../controller/auth");
const { registerValidator } = require("../utils/registerValidator");

router.post("/register", registerValidator, authController.register);
// router.post("/login", authController.login);

module.exports = router;
