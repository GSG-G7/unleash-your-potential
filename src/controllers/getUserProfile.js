const jwt = require('jsonwebtoken');
const { getUserById } = require('../database/queries/getUserById');
require('env2')('./config.env');


exports.getUserData = (req, res, next) => {
  jwt.verify(req.cookies.unleash, process.env.PRIVATEKEY, (err, decoded) => {
    if (err) {
      res.render('profile', { error: err, name: false });
    } else {
      getUserById(req.cookies.id)
        .then((User) => {
          res.render('profile', {
            UserData: User.rows,
            isLogedIn: true,
            name: User.user_name,
          });
        })
        .catch((error) => next(error.stacks));
    }
  });
};
