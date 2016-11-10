const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
  'item' : String,
  'qty' : String
});

module.exports = mongoose.model('Grocery', grocerySchema);
