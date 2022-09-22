const mongoose = require("mongoose");

const CounterSchema = mongoose.Schema({
  currentOncology: {
    total: Number,
  }
});

const counterOncology = mongoose.model("counterOncology", CounterSchema);
module.exports = counterOncology;