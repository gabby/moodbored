const router = require('express').Router();
const User = require('../db/users');
const passport = require('passport')
const PinterestStrategy = require('passport-pinterest').Strategy;

passport.use(new PinterestStrategy({
  clientID: process.env.PINTEREST_APP_ID,
  clientSecret: process.env.PINTEREST_APP_SECRET,
  scope: ['read_public', 'read_relationships', 'write_public'],
  callbackURL: "https://830c8bd5.ngrok.io/auth/pinterest/callback",
  state: true
},
  function(accessToken, refreshToken, profile, done) {
    const pinterestProfile = {
      username: profile.username,
      pinterestId: profile.id,
      pinterestAccessToken: accessToken,
      image: profile.profileImage.url,
      last_name: profile._json.data.last_name,
      first_name: profile._json.data.first_name
    }
    User.findOrCreate({
      where: {pinterestId: profile.id},
      defaults: pinterestProfile
    })
    .spread(user => {
      // console.log(user);
      done(null, user)
    })
    .catch(done)
  })
);

router.get('/', passport.authenticate('pinterest'));

router.get('/callback', passport.authenticate('pinterest', {failureRedirect: '/login' }), (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;