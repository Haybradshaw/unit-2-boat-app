var mongoose = require('mongoose');
var Schema = mongoose.Schema



var motorSchema = new Schema({
    HP: {
      type: String,
      //enum: ['125', '150', '175', '200']
    },
    cycle: {
      type: String, 
      //enum: ['2 Stroke', '4 Stroke']
    },
    make: {
      type: String
      //enum: ['Yamaha','Suzuki','Mercury']
    }
  });
   

  module.exports = mongoose.model('motor',motorSchema);