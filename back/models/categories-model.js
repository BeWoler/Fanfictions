const {Schema, model} = require('mongoose');

const CategoriesSchema = new Schema({
  category: [{type: Schema.Types.ObjectId, ref: 'Fanfics'}],
  name: [{type: String, required: true}]
})

module.exports = model('Categories',  CategoriesSchema);
