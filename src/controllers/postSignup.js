const Joi = require('@hapi/joi');

const { signupSchema } = require('./schemas');

exports.postSignup = (req, res, next) => {
  Joi.validate(req.body, signupSchema, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};
