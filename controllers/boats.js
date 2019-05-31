var Boat = require('../models/boat');
var Motor = require('../models/motor');
var User = require('../models/user');

module.exports = {
    index,
    show,
    new: newBoat,
    create,
    delBoat
};

function show(req, res) {
  Boat.findById(req.params.id).exec((err, boat) => {
    Motor.find({ boat: boat._id }), function(err, motors){
      res.render('boats/show', {boat, motors, user: req.user});
    }
  })
} 
function index(req, res) {
  Boat.find({}, (err, boats) => {
    res.render('boats/index', {title: "All Boats", boats, user: req.user})
  })
}

function newBoat(req, res) {
    console.log('function running');
    res.render('boats/new', {user: req.user});
}

function create(req, res) {
    var boat = new Boat(req.body);
    console.log(boat)
    boat.save(function(err) {
      if (err) {
        console.log(err);
        return res.redirect('/boats/new');
      }
      res.redirect('/boats');
    });

  }
//------below is FINALLY correct--@codie----
function delBoat(req, res, next) {
  const p1 = Boat.deleteOne({_id : req.params.id});
  const p2 = Motor.deleteOne({_id : req.params.id});
  console.log(p1, p2)
     Promise.all([p1,p2])
    .then(function(){
      res.redirect('/boats');
    }
    );
  }
