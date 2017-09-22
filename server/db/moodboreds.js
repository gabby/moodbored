const Sequelize = require('sequelize');
const db = require('./_db');

const MoodBored = db.define('moodbored', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = MoodBored;