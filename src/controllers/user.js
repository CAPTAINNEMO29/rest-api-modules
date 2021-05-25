//requerir los modelos
const User = require("../models/user");
const Car = require("../models/cars");

module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);
  },
  // Este metodo va a permitir agregar un nuevo usuario
  //para enviar datos hay que usar POST -> headers -> Key = Content-Type y Value = application/json
  //y en Body en raw escribiremos lo que vamos a enviar
  newUser: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(200).json(user);
  },
  getUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  },
  replaceUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ succes: true });
  },
  updateUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ succes: true });
  },
  deleteUser: async (req, res, next) => {
    const { userId } = req.params;
    await User.findByIdAndRemove(userId);
    res.status(200).json({ succes: true });
  },
  getUsersCars: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("cars");
    res.status(200).json(user);
  },
  newUserCar: async (req, res, next) => {
    const { userId } = req.params;
    const newCar = new Car(req.body);
    const user = await User.findById(userId);
    newCar.seller = user;
    await newCar.save();
    user.cars.push(newCar);
    await user.save();
    res.status(201).json(newCar);
  },
};
