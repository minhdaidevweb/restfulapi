const User = require('../models/user.model')

const UserService = {
  getUsers: async () => {
    return await User.find()
  },
  createUser: async (body) => {
    const newUser = new User(body)
    await newUser.save()
    return newUser
  },
  getUser: async (params) => {
    const { id } = params
    const user = await User.findById(id)
    if (user) return user
    else return 'Can not find user.'
  },
  replaceUser: async (params, body) => {
    const { id } = params
    const user = await User.findByIdAndUpdate(id, body, { new: true })
    if (user) return user
    else return 'Can not find user.'
  },
  updateUser: async (params, body) => {
    const { id } = params
    const user = await User.findByIdAndUpdate(id, body, { new: true })
    if (user) return user
    else return 'Can not find user.'
  },
}

module.exports = UserService
