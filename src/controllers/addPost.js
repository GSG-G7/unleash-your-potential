const { addPost } = require('../database/queries/addPost');

exports.getAddPost = (req, res) => {
  if (req.logedIn) {
    res.render('addpost', {
      isLogedIn: req.logedIn,
      name: req.unleash.username,
    });
  } else res.redirect('/login');
};

exports.addPost = (req, res, next) => addPost(req.body, req.unleash.id).then(console.log(req.unleash))
  .then(() => res.redirect('/'))
  .catch(() => next());
// DONE
