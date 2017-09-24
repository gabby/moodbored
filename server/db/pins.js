const Sequelize = require('sequelize');
const db = require('./_db');

const Pin = db.define('pin', {
  pinterestId: {
    type:Sequelize.STRING,
  },
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
    type:Sequelize.JSONB
  },
  attribution: {
    type:Sequelize.JSONB
  },
  image: {
    type:Sequelize.JSONB
  },
  metadata:{
    type:Sequelize.JSONB
  }
})

module.exports = Pin;