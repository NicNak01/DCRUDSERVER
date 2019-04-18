const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  number: { type: String, required: true },
  owner: { type: String, required: true }
});

module.exports = mongoose.model("CarNumber", itemSchema);
