const mongoose = require("mongoose");

const sortSchema = new mongoose.Schema({
  link: { type: String },
  sortlink: { type: String },
  expire: { type: String },
});

const SortModel = mongoose.model("list", sortSchema);

module.exports=SortModel
