const express = require('express');

const { getSignup } = require('./getSignup');
const { getHome } = require('./getHome');
const { getLogin } = require('./getLogin');
const { postLogin } = require('./postLogin');
const { postSignup } = require('./postSignup');
const { getAddPost } = require('./getAddPost');
const { addPost } = require('./addPost');
const { getUserData } = require('./getUserData');

const router = express.Router();

router.get('/', getHome);
router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/signup', getSignup);
router.post('/signup', postSignup);
router.get('/addpost', getAddPost);
router.post('/addpost', addPost);
router.get('/profile', getUserData);

module.exports = router;
