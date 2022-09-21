const mongoose = require("mongoose");

const CounterHeamatologySchema = mongoose.Schema({

  currentHaematology: {
    total: Number,
    time:Date
  }
});

const CounterHeamatology = mongoose.model("counterHeamatology", CounterHeamatologySchema);
module.exports = CounterHeamatology;
