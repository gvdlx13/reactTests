var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dataSchema = new Schema ({
  id : {type : Number}
});


var gardenSchema = new Schema({
  name : {type : String, required : true},
  location : {type : String},
  readings : [dataSchema]
});

var Gardens = mongoose.model('Gardens', gardenSchema);

module.exports = Gardens;
