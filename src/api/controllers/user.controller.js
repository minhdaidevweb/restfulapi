const UserService = require('../services/user.service')

const UserController = {
  getUsers: async (req, res, next) => {
    try {
      const users = await UserService.getUsers()
      res.status(200).json(users)
    } catch (error) {
      return next(error)
    }
  },
  createUser: async (req, res, next) => {
    try {
      const newUser = await UserService.createUser(req.body)
      res.status(200).json(newUser)
    } catch (error) {
      return next(error)
    }
  },
  getUser: async (req, res, next) => {
    try {
      const user = await UserService.getUser(req.params)
      res.status(200).json(user)
    } catch (error) {
      return next(error)
    }
  },
  replaceUser: async (req, res, next) => {
    try {
      const user = await UserService.replaceUser(req.params, req.body)
      res.status(200).json(user)
    } catch (error) {
      return next(error)
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const user = await UserService.updateUser(req.params, req.body)
      res.status(200).json(user)
    } catch (error) {
      return next(error)
    }
  },
}

module.exports = UserController
