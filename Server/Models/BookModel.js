var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookModel = new Schema({
   guid: { type: String },
   title: { type: String },
   author: { type: String }, 
   genre: { type: String }  
});

module.exports = mongoose.model("Book". bookModel);