const mongoose = require("mongoose");

const CounterSchema = mongoose.Schema({
  currentCardiology: {
    total: Number,
  },
  currentHaematology: {
    total: Number,
  },
  currentOncology: {
    total: Number,
  },
});

const Counter = mongoose.model("counter", CounterSchema);
module.exports = Counter;
