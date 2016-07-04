"use strict"

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let articleModel = new Schema({
    title: String,
    body: String,
    author: String,
    creationTime: String,
    lastEditTime: String,
    genre: String
});

module.exports = mongoose.model("Article", articleModel);
