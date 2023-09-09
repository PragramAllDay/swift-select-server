const bcrypt = require("bcrypt");

async function validateUser(hash, password) {
  const result = await bcrypt.compare(password, hash);
  return result;
}

module.exports = { validateUser };
