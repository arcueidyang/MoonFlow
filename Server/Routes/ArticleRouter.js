var express = require("express");
var Article = require("../../Models/ArticleModel");

var routes = function() {
    var router = express.Router();

    router.route("/")
        .post(function(req, res) {
            var article = new Article(req.body);
            article.save();
            res.status(201).send(article);
        })
        .get(function(req, res) {
            var query = req.query;
            Article.find(query, function(err, articles){
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.json(articles);
                }
            });
        });

    router.use("/:articleId", function(req, res, next) {
        Article.findById(req.params.articleId, function(err, article) {
            if(err) {
                res.status(500).send(err);
            } else if(article) {
                req.article = article;
                next();
            } else {
                res.status(404).send("Can't find the article");
            }
        });
    });    

    router.route("/:articleId")
        .get(function(req, res) {
            res.json(req.article);
        })
        .put(function(req, res){
        	UpdateItem(req.article, req.body);
            req.article.save();
            req.json(req.article);            
        })
        .patch(function(req, res) {
            if(req.body._id) {
                delete req.body._id;
            }
            for(var property in req.body) {
                if(req.body.hasOwnProperty(property)) {
                    req.article[property] = req.body[property];
                }
            }

            req.article.save(function(err) {
                if(err) {
                    res.status(500).send(err);    
                } else {
                    res.json(req.article);
                }
            })
        })
        .delete(function(req, res) {
            req.article.remove(function(err) {
                if(err) {
                    res.status(500).send(err);    
                } else {
                    res.status(204).send("Removed");
                }
            });
        });

    return router;
};

module.exports = routes;


