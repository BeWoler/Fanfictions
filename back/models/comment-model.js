const {Schema, model} = require('mongoose');

const CommentsSchema = new Schema({
  author: {type:String, required: true},
  text: {type: String, required: true},
  fanfic: {type: String, required: true}
})

module.exports = model('Comments',  CommentsSchema);