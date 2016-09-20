var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dataSchema = new Schema ({
  moisture :  Number,
  temp : Number,
  date :  Date
});


var plantSchema = new Schema({
  name : {type : String, required : true},
  type : {type : String},
  readings : [dataSchema]
});

var Plants = mongoose.model('Plants', plantSchema);

module.exports = Plants;
