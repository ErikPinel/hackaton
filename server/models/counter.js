const mongoose = require("mongoose");

const CounterSchema = mongoose.Schema({
  currentCardiology: {
    total: Number,
    time:Date
  }
});

const Counter = mongoose.model("counter", CounterSchema);
module.exports = Counter;
