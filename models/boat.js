var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//----add motor schema below---

// var motorSchema = new Schema({
//   HP: {
//     type: String,
//     // Number, enum: ['125', '150', '175', '200']
//   },
//   cycle: {
//     type: String,
//     // String, enum: ['2 Stroke', '4 Stroke']
//   },
//   make: {
//     type: String,
//     // String, enum: ['Yamaha','Suzuki','Mercury']
//   }
// });

//----boat schema below-----

var boatSchema = new Schema({
 
  brand: {
    type: String, 
    // enum: ['Pescador', 'Stalker', 'SeaVee', 'Dusky']
  },
  length: {
    type: String, 
    // require: true,
    // min: 10,
    // max: 60
  },
  draft: {
    type: String,
    // min: 3,
    // max: 60
  },
  motor: [{type: Schema.Types.ObjectId, ref:'motor'}]
});




module.exports = mongoose.model('boat', boatSchema);
