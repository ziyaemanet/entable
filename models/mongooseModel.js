const mongoose = require('mongoose');

const burgerSchema = new mongoose.Schema({
  type: String, // {type: String}
  price: Number, // {type: Number, required: true, min: 0}
  createdAt: { type: Date, default: Date.now },
});

const Burger = mongoose.model('burgers', burgerSchema);

module.exports = Burger;
2
