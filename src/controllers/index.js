const express = require('express');

const { getHome } = require('./getHome');
const { postLogin, getLogin } = require('./login');
const { postSignup, getSignup } = require('./signup');
const { addPost, getAddPost } = require('./addPost');
const { getUserData } = require('./getProfile');
const { getLogout } = require('./getLogout');
const { valid } = require('./validate');
const { client, server } = require('./error');

const router = express.Router();
router.use(valid);
router.get('/', getHome);

router.route('/login').get(getLogin).post(postLogin);
router.route('/signup').get(getSignup).post(postSignup);
router.route('/addpost').get(getAddPost).post(addPost);

router.get('/logout', getLogout);
router.get('/profile', getUserData);


router.use('*', client);
router.use(server);

module.exports = router;
