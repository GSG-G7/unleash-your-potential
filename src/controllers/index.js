const express = require('express');

const { getSignup } = require('./getSignup');
const { getHome } = require('./getHome');
const { getLogin } = require('./getLogin');
const { postLogin } = require('./postLogin');
const { postSignup } = require('./postSignup');

const router = express.Router();

router.get('/', getHome);
router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/signup', getSignup);
router.post('/signup', postSignup);

module.exports = router;
