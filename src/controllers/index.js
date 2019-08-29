const express = require('express');

const { getSignup } = require('./getSignup');
const { getHome } = require('./getHome');
const { getLogin } = require('./getLogin');
const { postLogin } = require('./postLogin');
const { postSignup } = require('./postSignup');
const { getAddPost } = require('./getAddPost');
const { addPost } = require('./addPost');
const { getUserData } = require('./getUserProfile');
const { getLogout } = require('./getLogout');

const { client, server } = require('./error');

const router = express.Router();

router.get('/', getHome);
router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/logout', getLogout);
router.get('/signup', getSignup);
router.post('/signup', postSignup);
router.get('/addpost', getAddPost);
router.post('/addpost', addPost);
router.get('/profile', getUserData);


router.use('*', client);
router.use(server);

module.exports = router;
