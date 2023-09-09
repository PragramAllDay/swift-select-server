const db = require("../models");
const { createCustomerService } = require("../services/customer");
const bcrypt = require("bcrypt");

const Customer = db.customer;

// create new customer
const register = async (req, res) => {
  // request
  let info = {
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    billingAddress: req.body.billingAddress,
    phone: req.body.phone,
    password: req.body.password,
  };

  // check if email already exists
  let customer = await Customer.findOne({
    where: { email: req.body.email },
  });

  if (customer) {
    return res.status(400).json({ errors: { msg: "Email already exists" } });
  }
  // hash password
  info.password = bcrypt.hashSync(info.password, 10);

  // create customer service
  customer = await createCustomerService(info);

  // response
  if (customer) {
    res.status(200).json({
      success: { msg: "User created successfully", customer: customer },
    });
  } else {
    res.status(500).json({ errors: { msg: "Error while creating user" } });
  }
};

module.exports = {
  register,
};
