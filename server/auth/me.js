const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send(req.user);
});

router.put('/', (req, res, next) => {
  User.findOne({
    where:req.body
  })
  .then(user => {
    if (!user) {
      res.sendStatus(401);
    } else {
      req.logIn(user, err => {
        if (err) return next(err);
        res.json(user);
      })
    }
  })
})

router.delete('/logout', (req, res, next) => {
  req.logOut();
  res.sendStatus(204);
})


module.exports = router; 