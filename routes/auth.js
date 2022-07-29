const express = require("express");
const {registerCtrl, loginCtrl} = require("../controllers/auth")

const router = express.Router();
const {validatorRegister, validateLogin} = require("../validators/auth")


router.post("/register", validatorRegister, registerCtrl)
router.post("/login", validateLogin, loginCtrl)

module.exports = router;

