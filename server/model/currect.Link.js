const mongoose = require("mongoose");

const sortSchema = new mongoose.Schema({
  count: { type: Number },
});

const CurrectAlgo = mongoose.model("count", sortSchema);

module.exports = CurrectAlgo;
