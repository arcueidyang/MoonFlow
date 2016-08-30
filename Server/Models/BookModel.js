"use strict"

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

module.exports = mongoose.model("BookTest", bookModel);