var Boat = require('../models/boat');

module.exports = {
    index,
    new: newBoat
};


function index(req, res) {
    Boat.find({}, function(err, boats) {
        res.render('user/index', {
            boats
        });
    });
}

function newBoat(req, res) {
    res.render('boats/new');
}


