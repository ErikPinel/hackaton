const mongoose = require("mongoose");

const CounterOncologySchema = mongoose.Schema({

 
  currentOncology: {
    total: Number,
    time:Date
  }
});

const CounterOncology = mongoose.model("counteroncology", CounterOncologySchema);
module.exports = CounterOncology;
