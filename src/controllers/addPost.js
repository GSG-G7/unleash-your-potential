const { addPost } = require('../database/queries/addPost');

exports.getAddPost= (req, res, next) => {
  if(req.logedIn){
    res.render('addpost', { 
      isLogedIn: req.logedIn,
      name: req.unleash.user_name
    });
  }
  else res.redirect('/login');
};

exports.addPost = (req, res, next) => 
  addPost(req.body)
    .then((result) => res.redirect('/'))
    .catch((err) => next(err.stack));
//DONE