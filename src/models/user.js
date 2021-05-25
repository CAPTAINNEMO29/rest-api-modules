const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  cars: [
    {
      //es otra coleccion de MongoDB
      type: Schema.Types.ObjectId,
      ref: "car",
    },
  ],
});
//el nombe del modelo es user y tiene el esquema definido userSchema
module.exports = mongoose.model("user", userSchema);
