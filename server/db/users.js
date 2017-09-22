const Sequelize = require('sequelize');
const db = require('./_db');

const User = db.define('user', {
  pinterestId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name:{
    type:Sequelize.STRING
  },
  username: {
    type:Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING
  }
}); 

module.exports = User;