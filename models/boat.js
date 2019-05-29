var mongoose = require('mongoose');
var Schema = mongoose.Schema;


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
});




module.exports = mongoose.model('boat', boatSchema);
