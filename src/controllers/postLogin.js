const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('env2')('./config.env');

const { getUser } = require('../database/queries/getUser');
const { loginSchema } = require('./schemas');

exports.postLogin = (req, res) => {
  Joi.validate(req.body, loginSchema, (err, value) => {
    if (err) {
      res.render('login', { error: err });
    } else {
      getUser(value)
        .then((result) => bcrypt.compare(value.password, (result.rows[0].password)))
        .then((isValid) => {
          if (isValid) {
            jwt.sign(value, process.env.PRIVATEKEY, { algorithm: 'HS256' }, (err, token) => {
              
              res.cookie('unleash', token);
              getUser(value).then((user) => user.rows[0])
                .then((user) => {
                  res.cookie('id', user.id);
                  res.cookie('username', user.user_name);
                  res.render('home', {
                     name: user.user_name,
                     isLogedIn: true
                   });
                });
            });
          } else {
            res.render('login', { error: 'Password or email is wrong' });
          }
        });
    }
  });
};
