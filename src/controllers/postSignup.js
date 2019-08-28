const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const { addUser } = require('../database/queries');
const { signupSchema } = require('./schemas');

exports.postSignup = (req, res, next) => {
  Joi.validate(req.body, signupSchema, (err, result) => {
    const { username, email } = result;
    if (err) {
      res.render('signup', { error: err });
    } else {
      bcrypt.genSalt(10)
        .then((salt) => bcrypt.hash(result.password, salt))
        .then((hash) => addUser({ username, email, hash }))
        .then(() => res.redirect('/'))
        .catch((err) => res.render('signup', { error: err }));
    }
  });
};
