const router = require('express').Router();
const User = require('../db/user');
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
    User.findOrCreate({ pinterestId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

router.get('/', passport.authenticate('pinterest'));

router.get('/callback', passport.authenticate('pinterest', {failureRedirect: '/login' }), (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;