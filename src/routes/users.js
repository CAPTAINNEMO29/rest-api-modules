const router = require("express-promise-router")();

//aqui importamos las funciones que usaremos
const {
  index,
  newUser,
  getUser,
  replaceUser,
  deleteUser,
  getUsersCars,
  newUserCar,
} = require("../controllers/user");
//crear las rutas del servidor

//esta es para recibir los datos
router.get("/", index);
//obtener un unico usuario
//debemos usar el id del usuario
router.get("/:userId", getUser);
//esta es para enviar datos
router.post("/", newUser);
//actualizar un usuario
router.put("/:userId", replaceUser);
//borrar un usuario
router.delete("/:userId", deleteUser);

//mas rutas para el modelo cars
//obtener cars de usuarios por Id
router.get("/:userId/cars", getUsersCars);
//agregar cars al usuario
router.post("/:userId/cars", newUserCar);

module.exports = router;
