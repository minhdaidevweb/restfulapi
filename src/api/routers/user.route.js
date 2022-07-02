const express = require('express')
const router = express.Router()
const {
  validateParams,
  validateBody,
  idSchema,
  userSchema,
  userOptionalSchema,
} = require('../middlewares/validate')
const UserController = require('../controllers/user.controller')

router
  .get('/users', UserController.getUsers)
  .post('/users', validateBody(userSchema), UserController.createUser)

router
  .get('/users/:id', validateParams(idSchema, 'id'), UserController.getUser)
  .put(
    '/users/:id',
    validateParams(idSchema, 'id'),
    validateBody(userSchema),
    UserController.replaceUser
  )
  .patch(
    '/users/:id',
    validateParams(idSchema, 'id'),
    validateBody(userOptionalSchema),
    UserController.updateUser
  )

module.exports = router
