"use strict"

let express = require("express");		
let BookRouter = require("./BookRouter");		
let ArticleRouter = require("./ArticleRouter");		
		
let routes = function() {		
    let router = express.Router();		
    router.use("/book", BookRouter);		
    router.use("/article", ArticleRouter);		
    return router;		
};		

module.exports = routes;