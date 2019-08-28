const jwt = require('jsonwebtoken');
const { getUserById } = require('../database/queries/getUserById');
require('env2')('./config.env');


exports.getUserData = (req, res, next) => {
  jwt.verify(req.cookies.unleash, process.env.PRIVATEKEY, (err, decoded) => {
    if (err) {
      console.log(err);
    } else {
      console.log(decoded);
      getUserById(req.cookies.id)
        .then((User) => {
          res.render('/profile', { UserData: User.rows[0] });
        })
        .catch((error) => next(error.stacks));
    }
  });
};
