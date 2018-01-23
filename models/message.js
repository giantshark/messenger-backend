var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var message = new Schema({
  sender:  String,
  message: String,
  time: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Message', message);