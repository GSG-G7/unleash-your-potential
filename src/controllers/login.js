const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('env2')('./config.env');

const { validate } = require('./validate');
const { getUser } = require('../database/queries/getUser');
const { loginSchema } = require('./schemas');

exports.getLogin = (req, res) => {
  if (req.logedIn) {
    res.render('home', {
      isLogedIn: req.logedIn,
      allPosts: req.unleash
    });
  }
  else res.render('login');
};

exports.postLogin = (req, res) => {
  validate(req, res, loginSchema)
  .then(value => 
    getUser(value)
    .then((result) => bcrypt.compare(value.password, (result.rows[0].password)))
    .then((isValid) => isValid? getUser(value): 'error')
    .then((user) => {     
      let { id, user_name, email } = user.rows[0];
      return { id, user_name, email };
    })
    .then(opjectForToken =>
      jwt.sign(opjectForToken, process.env.PRIVATEKEY, { algorithm: 'HS256' }, (err, token) => {
        res.cookie('unleash', token);
        req.logedIn = true;
        res.render('home', {
          name: opjectForToken.user_name,
          isLogedIn: req.logedIn,
        });
      })
    )
    .catch(err => res.render('login', { error: 'Password or email is wrong' }))
  )
};
//DONE