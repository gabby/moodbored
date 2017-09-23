const router = require('express').Router();
const User = require('../db/users');

router.use('/pinterest', require('./pinterest'));
router.use('/me', require('./me'));

module.exports = router; 
