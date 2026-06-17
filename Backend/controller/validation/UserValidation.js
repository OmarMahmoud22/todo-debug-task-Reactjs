// Require Joi
const Joi = require("joi");
// CreateUserSchema
const createUserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(),
  password: Joi.string().min(6).required(),
});
// UpdateUserSchema
// const updateUserSchema = Joi.object({
//   username: Joi.string().min(3).optional(),
//   email: Joi.string().email().optional(),
//   phoneNumber: Joi.string().optional(),
//   password: Joi.string().min(6).optional(),
//   isActive: Joi.boolean().optional(),
// });
const LoginSchema = Joi.object({
  email:Joi.string().email().required(),
  password:Joi.string().required()
})
// Export
module.exports = { createUserSchema, LoginSchema };