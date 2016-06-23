var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleModel = new Schema({
    title: String,
    body: String,
    author: String,
    creationTime: String,
    lastEditTime: String,
    genre: String
});

module.exports = mongoose.model("Article", articleModel);