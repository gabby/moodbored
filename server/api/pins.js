const router = require('express').Router();
const Pin = require('../db/pins')

router.get('/user/:userId', (req, res, next) => {
  Pin.findAll({
    where: {
      userId: req.params.userId
    }
  })
  .then(pins => {
    res.status(200).json(pins);
  })
  .catch(next);
}); 

router.get('/:pinId', (req, res, next) => {
  console.log(req.params.pinId)
  Pin.findById(req.params.pinId)
  .then(pin => res.status(200).send(pin))
  .catch(next);
}); 


module.exports = router;