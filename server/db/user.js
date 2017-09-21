const Sequelize = require('sequelize');
const db = require('./_db');

const User = db.define('user', {
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  pinterestId: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  }
}); 

module.exports = User;