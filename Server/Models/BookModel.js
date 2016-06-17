var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookModel = new Schema({
   guid: String,
   title: String,
   author: String, 
   genre: String  
});

module.exports = mongoose.model("BookTest", bookModel);