const express = require('express');

const { getSignup } = require('./getSignup');
const { getHome } = require('./getHome');
const { getLogin } = require('./getLogin');
const { postLogin } = require('./postLogin');
<<<<<<< HEAD
const { postSignup } = require('./postSignup');
=======
const { getAddPost } = require('./getAddPost');
const { addPost } = require('./addPost');
>>>>>>> 9692ed7c12eac0094f01982b9ae8eddf409d7104

const router = express.Router();

router.get('/', getHome);
router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/signup', getSignup);
router.post('/signup', postSignup);
router.get('/addpost', getAddPost);
router.post('/addpost', addPost);

module.exports = router;
