const express = require('express');
// auth 

const { signup, login } = require('../controllers/auth.js');


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;