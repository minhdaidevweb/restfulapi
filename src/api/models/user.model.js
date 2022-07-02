const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  decks: [{ type: Schema.Types.ObjectId }],
})

const User = mongoose.model('User', UserSchema)

module.exports = User
