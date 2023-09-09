const db = require("../models");
const bcrypt = require("bcrypt");
const { validateUser } = require("../utils/validatePassword");
const {
  getAllCustomerService,
  getCustomerByIdService,
  updateCustomerByIdService,
  deleteCustomerByIdService,
} = require("../services/customer");

const Customer = db.customer;

// get all customer
const getAllCustomer = async (req, res) => {
  // get all customer service
  let customers = await getAllCustomerService();

  // response
  if (customers.length === 0) {
    res.status(404).json({ errors: { msg: "No customer found" } });
  } else {
    res.status(200).json({ customers });
  }
};

// get customer by id
const getCustomerById = async (req, res) => {
  // get customer by id service
  let customer = await getCustomerByIdService(req.params.id);

  // response
  if (!customer) {
    res.status(404).json({ errors: { msg: "No customer found with this id" } });
  } else {
    res.status(200).json({ customer });
  }
};

// update customer by id
const updateCustomerById = async (req, res) => {
  // request
  let info = {
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    billingAddress: req.body.billingAddress,
    phone: req.body.phone,
  };

  // find customer by id service
  let customer = await getCustomerByIdService(req.params.id);
  if (customer) {
    customer = await updateCustomerByIdService(req.params.id, info);
    return res
      .status(200)
      .json({ success: { msg: "Update successfully" + " " + customer } });
  } else {
    return res.sendStatus(404);
  }
};

// delete customer by id
const deleteCustomerById = async (req, res) => {
  // get customer by id service
  let customer = await getCustomerByIdService(req.params.id);

  // validate password
  const allowed = await validateUser(
    customer.dataValues.password,
    req.body.password
  );

  // delete customer by id service
  if (customer && allowed) {
    customer = await deleteCustomerByIdService(req.params.id);
    return res
      .status(200)
      .json({ success: { msg: "Customer deleted successfully" } });
  } else {
    return res
      .status(400)
      .json({ errors: { msg: "Wrong password or user does not exist" } });
  }
};

module.exports = {
  getAllCustomer,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
};
