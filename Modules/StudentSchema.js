const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  rollno: String,
});

module.exports = mongoose.model("students", StudentSchema);
