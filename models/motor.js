var mongoose = require('mongoose');
var Schema = mongoose.Schema



var motorSchema = new Schema({
    HP: {
      type: Number,
      //enum: ['125', '150', '175', '200']
    },
    cycle: {
      type: String, 
      //enum: ['2 Stroke', '4 Stroke']
    },
    make: {
      type: String
      //enum: ['Yamaha','Suzuki','Mercury']
    },
    boat: [{type: Schema.Types.ObjectId, ref:'boat'}]
  });
   

  module.exports = mongoose.model('motor',motorSchema);