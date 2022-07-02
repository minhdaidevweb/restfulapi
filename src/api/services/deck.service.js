const User = require('../models/user.model')
const Deck = require('../models/deck.model')

const DeckService = {
  getDecks: async () => {
    return await Deck.find()
  },
  createDeck: async (body) => {
    const owner = await User.findById(body.owner)
    if (owner) {
      const newDeck = new Deck(body)
      await newDeck.save()
      owner.decks.push(newDeck._id)
      await owner.save()
      return newDeck
    } else return `Can't not find owner.`
  },
  getDeck: async (params) => {
    const { id } = params
    const deck = await Deck.findById(id)
    if (deck) return deck
    else return `Can't not find deck.`
  },
  replaceDeck: async (params, body) => {
    const { id } = params
    const deck = await Deck.findById(id)
    if (deck) {
      const owner = await User.findById(deck.owner)
      owner.decks.pull(deck)
      await owner.save()
      const newDeck = await Deck.findByIdAndUpdate(id, body, { new: true })
      const newOwner = await User.findById(body.owner)
      if (newOwner) {
        await newDeck.save()
        newOwner.decks.push(newDeck._id)
        await newOwner.save()
        return newDeck
      } else return `Can't not find owner.`
    } else return `Can't not find deck.`
  },
  updateDeck: async (params, body) => {
    const { id } = params
    const deck = await Deck.findById(id)
    if (deck) {
      const owner = await User.findById(deck.owner)
      owner.decks.pull(deck)
      await owner.save()
      const newDeck = await Deck.findByIdAndUpdate(id, body, { new: true })
      const newOwner = await User.findById(body.owner)
      if (newOwner) {
        await newDeck.save()
        newOwner.decks.push(newDeck._id)
        await newOwner.save()
        return newDeck
      } else return `Can't not find owner.`
    } else return 'Can not find deck.'
  },
  deleteDeck: async (params) => {
    const { id } = params
    const deck = await Deck.findById(id)
    if (deck) {
      const owner = await User.findById(deck.owner)
      owner.decks.pull(deck)
      await owner.save()
      return await Deck.findByIdAndDelete(id)
    } else return `Can't not find deck.`
  },
}

module.exports = DeckService
