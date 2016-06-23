var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookModel = new Schema({
   title: String,
   author: String, 
   genre: String,
   description: String,
   finishDate: String,
   rating: String  
});

module.exports = mongoose.model("BookTest", bookModel);