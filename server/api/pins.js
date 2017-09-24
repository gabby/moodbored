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

module.exports = router;