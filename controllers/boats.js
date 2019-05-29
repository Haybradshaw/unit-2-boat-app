var Boat = require('../models/boat');

module.exports = {
    index,
    new: newBoat,
    create,
    delBoat
};


function index(req, res) {
    Boat.find({})
    .then(boats => {
        res.render('boats/index', { draft:
            'all drafts', boats
        });
    })
    .catch(err => {
        console.log(err);
    })
}

function newBoat(req, res) {
    console.log('function running');
    res.render('boats/new');
}

function create(req, res) {
    var boat = new Boat(req.body);
    boat.save(function(err) {
      if (err) return res.redirect('/boats');
      console.log('create is running');
      res.redirect('/boats');
    });
  }
//------below is FINALLY correct--@codie----
function delBoat(req, res, next) {
    Boat.deleteOne({_id : req.params.id}).then(function(){
      res.redirect('/boats');
    }
    );
  }
