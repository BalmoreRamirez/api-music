const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validateLogin = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min: 3, max: 15}),
    (req, res, next) => {
        validateResults(req, res, next);
    },
];
const validatorRegister = [
    check("name").exists().notEmpty().isLength({min: 3, max: 99}),
    check("age").exists().notEmpty().isNumeric(),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min: 3, max: 15}),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = {validatorRegister, validateLogin};
