const Sequelize = require('sequelize');
const db = require('./_db');

const User = db.define('user', {
  username: {
    type:Sequelize.STRING,
  },
  pinterestId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING
  },
  last_name:{
    type:Sequelize.STRING
  },
  first_name: {
    type: Sequelize.STRING
  }
}); 

module.exports = User;