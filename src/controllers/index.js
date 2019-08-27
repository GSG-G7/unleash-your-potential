const express = require('express');
const Joi = require('@hapi/joi');

const { signupSchema } = require('./schemas');
const { getSignup } = require('./getSignup');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Home');
});

router.get('/signup', getSignup);

router.post('/signup', (req, res, next) => {
  console.log(req.body);

  Joi.validate(req.body, signupSchema, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result, 'aaaaaaaaaaaaaaaaa');
    }
  });
});
module.exports = router;
