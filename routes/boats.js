var express = require('express');
var router = express.Router();
var boatsCtrl =  require('../controllers/boats');


router.get('/', boatsCtrl.index);
router.get('/new', boatsCtrl.new);
router.get('/:id', boatsCtrl.show);



router.post('/', boatsCtrl.create);
router.delete('/:id', boatsCtrl.delBoat);



module.exports = router;
