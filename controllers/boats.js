var Boat = require('../models/boat');
var Motor = require('../models/motor');
var User = require('../models/user');

module.exports = {
    index,
    new: newBoat,
    create,
    delBoat
};


function index(req, res) {
    const p1 = Boat.find({});
    const p2 = Motor.find({});
    Promise.all([p1,p2])
    .then(boats => {
        res.render('boats/index', { draft:
            'all drafts', boats, user: req.user
        });
    })
    .catch(err => {
        console.log(err);
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
      var motor = new Motor(req.body);
      console.log(motor)
      motor.save(function(err) {
        if (err) return res.redirect('/boats');
        console.log('create is running');
        res.redirect('/boats');
      })
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
