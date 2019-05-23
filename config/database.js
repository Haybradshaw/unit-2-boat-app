var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
mongoose.connection.on('connected', function(){
    //------unsure-synatx------
    console.log(`mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;