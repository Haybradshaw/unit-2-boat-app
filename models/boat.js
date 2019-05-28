var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var boatSchema = new Schema({
 
  brand: {
    type: String, enum: ['Pescador', 'Stalker', 'SeaVee', 'Dusky'], default: 'Pescador'
  },
  boatLength: {
    type: Number, 
    require: true,
    min: 10,
    max: 60
  },
  draft: {
    type: Number,
    min: 3,
    max: 60
  },
});




module.exports = mongoose.model('boat', boatSchema);
