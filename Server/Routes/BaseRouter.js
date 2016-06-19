var express = require("express");
var BookRouter = require("./BookRouter")();

var routes = function() {
    var router = express.Router();
    router.use("/book", BookRouter);

    return router;
};

module.exports = routes;
