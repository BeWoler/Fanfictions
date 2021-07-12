const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  username: {type: String, unique: true, required: true},
  name: {type: String, default: ''},
  preferences: [{type: String}],
  fanfic: [{type: String}],
  isActivated: {type: Boolean, default: false},
  activationLink: {type: String}
})

module.exports = model('User', UserSchema, 'users');
