const { getPosts } = require('../database/queries/getPost');

exports.getHome = (req, res, next) => {
  getPosts()
    .then((posts) => {
      console.log(posts.rows);

      res.render('home', { allPosts: posts.rows });
    })
    .catch((err) => next(err.stacks));
};
