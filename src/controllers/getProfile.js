require('env2')('./config.env');

exports.getUserData = (req, res) => {
  // eslint-disable-next-line no-unused-expressions
  req.logedIn ? res.render('profile', {
    UserData: req.unleash,
    isLogedIn: true,
    name: req.unleash.user_name,
  }) : res.redirect('/login');
};
