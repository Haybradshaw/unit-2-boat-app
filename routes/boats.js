var express = require('express');
var router = express.Router();
var boatsCtrl =  require('../controllers/boats');

router.get('/', boatsCtrl.index);
router.get('/new', boatsCtrl.new);


 
module.exports = router;
