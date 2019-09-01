const jwt = require('jsonwebtoken');
const { getUserById } = require('../database/queries/getUserById');
require('env2')('./config.env');


exports.getUserData = (req, res) => {
  req.logedIn ?
        res.render('profile', {
          UserData: req.unleash,
          isLogedIn: true,
          name: req.unleash.user_name,
        })
  : res.render('login');
};

