const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("registers", SignupSchema);
