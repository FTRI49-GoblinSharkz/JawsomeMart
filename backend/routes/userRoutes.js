const express = require('express');
const router = express.Router();
const { userRegister, userSignin } = require('../controllers/userController.js');

//router.post('/login', userAuthorization, (req, res) => {});

router.post('/register', userRegister, (req, res) => {
  console.log('response', res.locals.data)
  res.status(200).json(res.locals.data);
});

router.post('/signin', userSignin, (req, res) => {
  console.log('response', res.locals.data)
  res.status(200).json(res.locals.data);
});

module.exports = router;
