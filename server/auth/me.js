const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send(req.user);
});

router.put('/', (req, res, next) => {
  User.findOne({
    where:req.body
  })
})