const Sequelize = require('sequelize');
const db = require('./_db');
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
      fields: 'id,link,note,color,image,attribution,media,metadata',
      limit: 100
    },
    json: true
  })
  .then((res) => {
    Async.mapLimit(res.data, 1, (pin, cb) => {
      db.models.pin.create({
      })
        .then(() => cb())
        .catch((err) => cb(err))
    }, (err, result) => {
      
    })
  })
  
})





module.exports = User;