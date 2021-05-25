const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//start database
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/rest-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("db is conected"))
  .catch((err) => console.log(err));

//settings
app.set("port", process.env.PORT || 3000);

//middlwares
app.use(morgan("dev"));
app.use(bodyParser.json());

//routes
const usersRoutes = require("./routes/users");
//aqui esta la direccion que usamos en Postman
//http://localhost:3000/users
app.use("/users", usersRoutes);

//start server
app.listen(app.get("port"), () => {
  console.log("server listening on port ", app.get("port"));
});
