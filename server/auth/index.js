const router = require('express').Router();
const User = require('../db/users');

router.use('/pinterest', require('./pinterest'));

module.exports = router; 
