const router = require('express').Router();
const User = require('../db/user');

router.use('/pinterest', require('./pinterest'));

module.exports = router; 
