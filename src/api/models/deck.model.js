const mongoose = require('mongoose')
const { Schema } = mongoose

const DeckSchema = new Schema({
  name: String,
  description: String,
  owner: { type: Schema.Types.ObjectId },
})

const Deck = mongoose.model('Deck', DeckSchema)

module.exports = Deck
