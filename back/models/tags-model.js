const {Schema, model} = require('mongoose');

const TagsSchema = new Schema({
  tag: [{type: Schema.Types.ObjectId, ref: 'Fanfics'}],
  name: [{type: String, required: true}]
})

module.exports = model('Tags',  TagsSchema);