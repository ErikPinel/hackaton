const mongoose = require("mongoose");

const CounterSchema = mongoose.Schema({
  currentCardiology: {
    total: Number,
    time:Date
  },
  currentHaematology: {
    total: Number,
  },
  currentOncology: {
    total: Number,
  },
});

const counter = mongoose.model("counter", CounterSchema);
module.exports = counter;
