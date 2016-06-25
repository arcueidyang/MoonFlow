/// <reference path="../typings/body-parser/body-parser.d.ts" />
/// <reference path="../typings/express/express.d.ts" />
/// <reference path="../typings/mongoose/mongoose.d.ts" />


import { json, urlencoded } from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";
var path = require("path");

var db = mongoose.connect("mongodb://localhost/bookAPI");

var app = express();

var port = 3000;

app.use(express.static(path.join(__dirname, "../")))

app.use(urlencoded({ extended: true }));
app.use(json());

var router = require("./Routes/BaseRouter")();

app.use("/api", router);

app.listen(port, function() {
    console.log("server has been set up and listening to port: " + port);
});