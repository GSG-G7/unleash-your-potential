const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');

exports.valid = (req, res, next) => {
  jwt.verify(req.cookies.unleash, process.env.PRIVATEKEY, (err, unleash) => {
    if (err) req.logedIn = false;
    else {
      req.logedIn = true;
      req.unleash = unleash;
    }
    next();
  });
};

exports.validate = (req, res, schema) => new Promise((resolve, reject) => Joi.validate(req.body, schema, (err, value) => {
  if (err) {
    reject(err);
  } else {
    resolve(value);
  }
}));
