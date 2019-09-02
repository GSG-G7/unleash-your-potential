const bcrypt = require('bcryptjs');

const { addUser } = require('../database/queries');
const { validate } = require('./validate');
const { signupSchema } = require('./schemas');

exports.getSignup = (req, res) => {
  if (req.logedIn) {
    res.redirect('/');
  } else res.render('signup');
};

exports.postSignup = (req, res) => validate(req, res, signupSchema)
  .then((userData) => {
    const { username, email, password } = userData;
    bcrypt.genSalt(10)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hash) => addUser({ username, email, hash }))
      .then(() => res.redirect('/'));
  })
  .catch((err) => res.render('signup', { error: err }));
// DONE
