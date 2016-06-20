var express = require("express");
var BookRouter = require("./BookRouter")();
var ArticleRouter = require("./ArticleRouter")();

var routes = function() {
    var router = express.Router();
    router.use("/book", BookRouter);
    router.use("/article", ArticleRouter);

    return router;
};

module.exports = routes;
