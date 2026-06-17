const joi = require("joi");

const AdminSchema = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required(),
});
const createAdminSchema = joi.object({
  full_name: joi.string().required(),
  email: joi.string().required().email(),
  password: joi.string().min(8),
});
module.exports = { AdminSchema, createAdminSchema };
