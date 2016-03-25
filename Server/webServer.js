/**
 * Created by Yang on 3/16/16.
 */

var express = require("express");
var path = require("path");
var app = express();
var rootPath = path.normalize(__dirname + "/../Client/");

app.use(express.static(rootPath));

var server = app.listen(8000, function() {
    console.log("Server running at http://127.0.0.1:8000");
});