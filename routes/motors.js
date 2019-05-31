var express = require('express');
var router = express.Router();
var motorsCtrl =  require('../controllers/motors');


router.post('/boats/:id/motors', motorsCtrl.create);
router.get('/boats/:id/motors/new', motorsCtrl.newMotor);




module.exports = router;
