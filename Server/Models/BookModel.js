/// <reference path="../../typings/mongoose/mongoose.d.ts" />

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let bookModel = new Schema({
   title: String,
   author: String, 
   genre: String,
   description: String,
   finishDate: String,
   rating: String  
});

module.export = mongoose.model("BookTest", bookModel);