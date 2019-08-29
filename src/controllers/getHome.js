const { getPosts } = require('../database/queries/getPost');

exports.getHome = (req, res, next) => {
  let isLogedIn = false;
  if (req.cookies.id) {
    isLogedIn = true;
  }
  getPosts()
    .then((posts) => {
      res.render('home', {
        allPosts: posts.rows,
        isLogedIn,
        name: req.cookies.username,
      });
    })
    .catch((err) => next(err.stacks));
};
