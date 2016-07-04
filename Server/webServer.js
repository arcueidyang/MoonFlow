
/// <reference path="../typings/body-parser/body-parser.d.ts" />
/// <reference path="../typings/express/express.d.ts" />
/// <reference path="../typings/mongoose/mongoose.d.ts" />

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");		
var path = require("path");

var db = mongoose.connect("mongodb://localhost/bookAPI");
		
var app = express();

var port = 3000;

app.use(express.static(path.join(__dirname, "../")));
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
		
var router = require("./Routes/BaseRouter")();
		
app.use("/api", router);
app.listen(port, function () {
    console.log("server has been set up and listening to port: " + port);
});