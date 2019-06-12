const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FaceSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email field is required']
  },
  password: {
    type: String,
    required: [true, 'password field is required']
  }
});

const Facebook = mongoose.model('fbdata', FaceSchema);
module.exports = Facebook;
