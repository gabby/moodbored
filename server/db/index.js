const Sequelize = require('sequelize');
const db = require('./_db'); 
const User = require('./users');
const Pin = require('./pins');
const MoodBored = require('./moodboreds');
const Pins_MoodBoreds = require('./pins_moodboreds_join');

User.hasMany(Pin);
User.hasMany(MoodBored);
Pin.belongsToMany(MoodBored, {through: Pins_MoodBoreds});
MoodBored.belongsToMany(Pin, {through: Pins_MoodBoreds});

module.exports = db; 