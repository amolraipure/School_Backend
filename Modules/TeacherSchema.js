const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  name: String,
  emp_id: String,
});

module.exports = mongoose.model("teachers", TeacherSchema);
