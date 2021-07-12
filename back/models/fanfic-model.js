const {Schema, model} = require('mongoose');

const FanficSchema = new Schema({
  title: {type: String, unique: true, required: true},
  description: {type: String, required: true},
  author: {type: String, required: true},
  chapters: [{type: String}],
  text: {type: String, required: true},
  tags: [{}],
  categories: [{}],
  fandoms: [{}],
  likes: {type: Number, default: 0},
  comments: [{types: String}]
})

module.exports = model('Fanfic', FanficSchema);
