const { getPosts } = require('../database/queries/getPost');

exports.getHome = (req, res, next) => {
  getPosts()
    .then((posts) => {
      res.render('home', { allPosts: posts.rows });
    })
    .catch((err) => next(err.stacks));
};
