const {Schema, model} = require('mongoose');

const FandomsSchema = new Schema({
  fandom: [{type: Schema.Types.ObjectId, ref: 'Fanfics'}],
  name: [{type: String, required: true}]
})

module.exports = model('Fandoms',  FandomsSchema);