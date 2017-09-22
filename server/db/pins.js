const Sequelize = require('sequelize');
const db = require('./_db');

const Pin = db.define('pin', {
  link: {
    type:Sequelize.STRING
  },
  url:{
    type:Sequelize.STRING
  }, 
  note: {
    type:Sequelize.TEXT
  },
  color: {
    type:Sequelize.STRING
  },
  media: {
    type:Sequelize.STRING
  },
  attribution: {
    type:Sequelize.STRING
  },
  image: {
    type:Sequelize.STRING
  },
  metadata:{
    type:Sequelize.TEXT
  }
})

module.exports = Pin;