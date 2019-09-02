require('env2')('./config.env');
const { getPosts } = require('../database/queries/getPost');

exports.getHome = (req, res, next) => {
  let username = '';
  if (req.logedIn) { username = req.unleash.userName; }
  getPosts()
    .then((posts) => res.render('home', {
      allPosts: posts.rows,
      isLogedIn: req.logedIn,
      name: username,
    }))
    .catch((err) => next(err.stacks));
};
// DONE
