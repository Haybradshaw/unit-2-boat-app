var Motor = require('../models/motor');


module.exports = {
    newMotor,
    create,
   // delMotor
};


// function index(req, res) {
//     boat.motor.find({})
//     .then(motors => {
//         console.log(req.body);
//         res.render('boats/index', { draft:
//             'all drafts', motors, user: req.user
//         });
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

function newMotor(req, res) {
    console.log('function running');
    res.render('motors/new', {user: req.user, boatId:req.params.id});
}

function create(req, res) {
    let motorData = req.body;
    motorData.boat = req.params.id;
    let motor = new Motor(motorData);
    motor.save();
    Motor.findOne({boat: req.params.id}).populate('boat').exec((err, motor) => {
        if (err) {
            console.log(err);
            res.redirect('/motors/new');
        }
        console.log(motor);
    });
    res.redirect('/boats');
  }

//   function(err) {
//     console.log('create is running');
//     if (err) return res.redirect('/motors/new');
//     res.redirect('boats/')
//   });
// //------below is FINALLY correct--@codie----
// // function delMotor(req, res, next) {
// //     Motor.deleteOne({_id : req.params.id}).then(function(){
// //       res.redirect('boats/index');
// //     }
// //     );
// //   }
