const router = require('express').Router();
const Pin = require('../db/pins')

router.get('/:userId', (req, res, next) => {
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
  Pin.findById(req.params.pinId)
  .then(pin => res.status(200).send(pin))
  .catch(next);
}); 


module.exports = router;