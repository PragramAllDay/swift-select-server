const customerController = require("../controller/customer");
const { registerValidator } = require("../utils/registerValidator");

const router = require("express").Router();

// router.post(
//   "/createCustomer",
//   registerValidator,
//   customerController.createCustomer
// );
router.get("/getAllCustomers", customerController.getAllCustomer);
router.get("/:id", customerController.getCustomerById);
router.put("/:id", customerController.updateCustomerById);
router.delete("/:id", customerController.deleteCustomerById);

module.exports = router;
