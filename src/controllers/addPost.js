const { addPost } = require('../database/queries/addPost');

exports.addPost = (req, res, next) => {
  addPost(req.body)
    .then((result) => res.redirect('/'))
    .catch((err) => next(err.stack));
};
