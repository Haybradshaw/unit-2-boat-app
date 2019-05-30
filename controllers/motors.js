// var Motor = require('../models/motor');
// var User = require('../models/user');

// module.exports = {
//     index,
//     new: newMotor,
//     create,
//    // delMotor
// };


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

// function newMotor(req, res) {
//     console.log('function running');
//     res.render('boats/new', {user: req.user});
// }

// function create(req, res) {
//     var motor = new Motor(req.body);
//     motor.save(function(err) {
//       console.log('create is running');
//       if (err) return res.redirect('boats/index');
//       res.redirect('boats/index');
//     });
//   }
// //------below is FINALLY correct--@codie----
// // function delMotor(req, res, next) {
// //     Motor.deleteOne({_id : req.params.id}).then(function(){
// //       res.redirect('boats/index');
// //     }
// //     );
// //   }
