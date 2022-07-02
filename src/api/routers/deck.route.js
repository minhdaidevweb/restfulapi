const express = require('express')
const router = express.Router()
const {
  validateParams,
  validateBody,
  idSchema,
  deckSchema,
  deckOptionalSchema,
} = require('../middlewares/validate')
const DeckController = require('../controllers/deck.controller')

router
  .get('/decks', DeckController.getDecks)
  .post('/decks', validateBody(deckSchema), DeckController.createDeck)

router
  .get('/decks/:id', validateParams(idSchema, 'id'), DeckController.getDeck)
  .put(
    '/decks/:id',
    validateParams(idSchema, 'id'),
    validateBody(deckSchema),
    DeckController.replaceDeck
  )
  .patch(
    '/decks/:id',
    validateParams(idSchema, 'id'),
    validateBody(deckOptionalSchema),
    DeckController.updateDeck
  )
  .delete('/decks/:id', validateParams(idSchema, 'id'), DeckController.deleteDeck)

module.exports = router
