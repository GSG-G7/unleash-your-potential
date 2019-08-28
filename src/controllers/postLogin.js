const Joi = require('@hapi/joi');
const { loginSchema } = require('./schemas');

exports.postLogin = (req, res) => {
  Joi.validate(req.body, loginSchema, (err, value) => {
    if (err) {
      console.log(err);
    } else{
      console.log(value);
    }
  });
};
