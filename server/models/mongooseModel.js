const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
  text: String, // {type: String}
  number: String,
  received: { type: Date, default: Date.now },
});

const Text = mongoose.model('burgers', TextSchema);

module.exports = Text;
