const Sequelize = require('sequelize');
const db = require('./_db');

const Pin = db.define('pin', {
  id: {
    type:Sequelize.STRING,
    primaryKey:true
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