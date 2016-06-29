/// <reference path="../../typings/mongoose/mongoose.d.ts" />

import * as mongoose from "mongoose";
let Schema = mongoose.Schema;

let bookModel = new Schema({
   title: String,
   author: String, 
   genre: String,
   description: String,
   finishDate: String,
   rating: String  
});

export = mongoose.model("BookTest", bookModel);