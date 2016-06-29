/// <reference path="../../typings/express/express.d.ts" />

import * as express from "express";
import BookTest = require("../Models/BookModel");

var routes = function() {
    var router = express.Router();
    router.route("/")
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

    router.use("/:bookId", (req, res, next) => {
        BookTest.findById(req.params.bookId, function(err, book) {
            if(err) {
                res.status(500).send(err);
            } else if(book) {
                req.book = book;
                next();
            } else {
                res.status(404).send("Can't find the book");
            }
        });
    });    

    router.route("/:bookId")
        .get(function(req, res) {
            res.json(req.book);
        })
        .put(function(req, res){
        	UpdateItem(req.book, req.body);
            req.book.save();
            req.json(req.book);            
        })
        .patch(function(req, res) {
            if(req.body._id) {
                delete req.body._id;
            }
            for(var property in req.body) {
                if(req.body.hasOwnProperty(property)) {
                    req.book[property] = req.body[property];
                }
            }

            req.book.save(function(err) {
                if(err) {
                    res.status(500).send(err);    
                } else {
                    res.json(req.book);
                }
            })
        })
        .delete(function(req, res) {
            req.book.remove(function(err) {
                if(err) {
                    res.status(500).send(err);    
                } else {
                    res.status(204).send("Removed");
                }
            });
        });

    return router;
};

function UpdateItem(itemToUpdate, sourceItem) {
    itemToUpdate.title = sourceItem.title;
    itemToUpdate.author = sourceItem.author;
    itemToUpdate.genre = sourceItem.genre;
}

module.exports = routes;