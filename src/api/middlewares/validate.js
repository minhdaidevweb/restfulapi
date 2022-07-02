const Joi = require('joi')

const validateParams = (schema, id) => {
  return (req, res, next) => {
    const { value, error } = schema.validate({ id: req.params[id] })
    if (error) return res.status(400).json(error.details[0].message)
    next()
  }
}

const validateBody = (schema) => {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.body)
    if (error) return res.status(400).json(error.details[0].message)
    next()
  }
}

const idSchema = Joi.object({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
})

const userSchema = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
})

const userOptionalSchema = Joi.object({
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2),
  email: Joi.string().email(),
})

const deckSchema = Joi.object({
  name: Joi.string().min(6).required(),
  description: Joi.string().min(10).required(),
  owner: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
})

const deckOptionalSchema = Joi.object({
  name: Joi.string().min(6),
  description: Joi.string().min(10),
  owner: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
})

module.exports = {
  validateParams,
  validateBody,
  idSchema,
  userSchema,
  userOptionalSchema,
  deckSchema,
  deckOptionalSchema,
}
