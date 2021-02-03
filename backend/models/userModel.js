const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  lastname: { type: String, required: true, unique: true },
  dni: { type: Number, required: true, unique: true },
  address: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  displayName: { type: String },
});

module.exports = User = mongoose.model("user", userSchema);
