const express = require("express");
const router = express.Router();
const authControlers = require("../controllers/auth-controller");
const validate = require("../middlewares/valiate-middleware")
const { signUpSchema, loginSchema } = require("../validators/auth-validator");

// these are routes that will used for navigation
router.route("/").get(authControlers.home);
router.route("/register").post(validate(signUpSchema), authControlers.register);
router.route("/login").post(validate(loginSchema), authControlers.login);

module.exports = router;
