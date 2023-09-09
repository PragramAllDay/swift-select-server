const { body, validationResult } = require("express-validator");

exports.registerValidator = [
  body("name").isString().withMessage("Name is required"),
  body("address").isString().withMessage("Address is required"),
  body("email").isEmail().withMessage("Email format is not correct"),
  body("billingAddress")
    .isString()

    .withMessage("Billing Address is required"),
  body("phone").isNumeric().withMessage("Phone number is required"),
  body("password").isString().withMessage("Password is required"),
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }
    next();
  },
];
