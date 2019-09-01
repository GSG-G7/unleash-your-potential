const jwt = require('jsonwebtoken');
require('env2')('./config.env');

const { getUserById } = require('../database/queries/getUserById');

exports.getUserData = (req, res, next) => { 
  if (req.logedIn) {
    const unleash = req.unleash;
      getUserById(unleash.id)
      .then((User) => {      
        res.render('profile', { 
          UserData: User.rows,
          isLogedIn: true,
          name: User.rows[0].user_name,
        });
      })
      .catch((error) => next(error.stacks));
  }
};
// DONE