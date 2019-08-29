const { addPost } = require('../database/queries/addPost');

exports.addPost = (req, res, next) => {
  addPost(req.body, req.cookies.id)
    .then(() => res.redirect('/'))
    .catch((err) => next(err.stack));
};
