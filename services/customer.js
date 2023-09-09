const db = require("../models");
const Customer = db.customer;

// create
const createCustomerService = async (customer) => {
  return await Customer.create(customer);
};

// find all
const getAllCustomerService = async () => {
  return await Customer.findAll({});
};

// find by id
const getCustomerByIdService = async (id) => {
  return await Customer.findOne({
    where: { id: id },
  });
};

// update by id
const updateCustomerByIdService = async (id, customer) => {
  return await Customer.update(customer, {
    where: { id: id },
  });
};

// delete by id
const deleteCustomerByIdService = async (id) => {
  return await Customer.destroy({
    where: { id: id },
  });
};

module.exports = {
  createCustomerService,
  getAllCustomerService,
  getCustomerByIdService,
  updateCustomerByIdService,
  deleteCustomerByIdService,
};
