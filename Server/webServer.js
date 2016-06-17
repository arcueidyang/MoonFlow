/**
 * Created by Yang on 3/16/16.
 */

var express = require("express");
var mongoose = require("mongoose");

var db = mongoose.connect("mongodb://localhost/bookAPI");
var Book = require("./Models/BookModel");

var app = express();

var port = 3000;
var router = express.Router();

router.route("/Books")
    .get(function(req, res) {
       Book.find(function(err, books){
           if(err) {
               console.log(err);
           } else {
               res.json(book);
           }
       });
    });

app.use("/api", router);

app.listen(port, function() {
    console.log("server has been set up and listening to port: " + port);
});