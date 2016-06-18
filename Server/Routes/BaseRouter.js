var express = require("express");

var routes = function() {
    var router = express.Router();
    router.route("/Books")
        .post(function(req, res) {
            var book = new BookTest(req.body);
            book.save();
            res.status(201).send(book);
        })
        .get(function(req, res) {
            var query = req.query;
            BookTest.find(query, function(err, books){
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.json(books);
                }
            });
        });

    router.route("/Book/:bookId")
        .get(function(req, res) {
            BookTest.FindById(req.params.bookId, function(err, book) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.json(book)
                }       
            });
        });

    return router;
};

module.exports = routes;
