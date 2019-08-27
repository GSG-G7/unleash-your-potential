const Joi = require('@hapi/joi');

exports.signupSchema = Joi.object().keys({
  username: Joi.string()
    .required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().regex(/[a-zA-Z0-9]{3,30}$/).required(),
  confirm_password: Joi.string().valid(Joi.ref('password')).required(),

});
