const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  seller: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});
//el nombre del modelo es car y tiene el esquema definido carSchema
module.exports = mongoose.model("car", carSchema);
