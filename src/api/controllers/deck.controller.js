const DeckService = require('../services/deck.service')

const DeckController = {
  getDecks: async (req, res, next) => {
    try {
      const decks = await DeckService.getDecks()
      res.status(200).json(decks)
    } catch (error) {
      return next(error)
    }
  },
  createDeck: async (req, res, next) => {
    try {
      const newDeck = await DeckService.createDeck(req.body)
      res.status(200).json(newDeck)
    } catch (error) {
      return next(error)
    }
  },
  getDeck: async (req, res, next) => {
    try {
      const deck = await DeckService.getDeck(req.params)
      res.status(200).json(deck)
    } catch (error) {
      return next(error)
    }
  },
  replaceDeck: async (req, res, next) => {
    try {
      const deck = await DeckService.replaceDeck(req.params, req.body)
      res.status(200).json(deck)
    } catch (error) {
      return next(error)
    }
  },
  updateDeck: async (req, res, next) => {
    try {
      const deck = await DeckService.updateDeck(req.params, req.body)
      res.status(200).json(deck)
    } catch (error) {
      return next(error)
    }
  },
  deleteDeck: async (req, res, next) => {
    try {
      const deck = await DeckService.deleteDeck(req.params)
      console.log(deck)
      res.status(200).json('Delete deck done.')
    } catch (error) {
      return next(error)
    }
  },
}

module.exports = DeckController
