const Sequelize = require('sequelize');
const db = require('./_db');
const Pin = require('./pins');
const Request = require('request-promise');
const Async = require('async');


const User = db.define('user', {
  pinterestId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pinterestAccessToken: {
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

User.afterCreate(user => {
  return Request({
    uri: 'https://api.pinterest.com/v1/me/pins',
    qs: {
      access_token: user.pinterestAccessToken,
      fields: 'id,url,link,note,color,image,attribution,media,metadata,creator',
      limit: 100
    },
    json: true
  })
  .then(res => {
    const data = res.data
    return Promise.all(data.map(pin => {
      return Pin.create(pin)
      .then(newPin => newPin.setUser(user.id))
    }))
    .catch(console.error);
  })
  
})





module.exports = User;