const mongoose = require("mongoose");

const CounterSchema = mongoose.Schema({
  currentHaematology: {
    total: Number,
  }
});

const counterHaematology = mongoose.model("counterHaematology", CounterSchema);
module.exports = counterHaematology;