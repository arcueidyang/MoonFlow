/**
 * Created by Yang on 3/17/16.
 */

var moonflow = angular.module("moonflow", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider.when("/newPost", {
            templateUrl: "Views/NewPost.html",
            controller: "NewPostController"
        });
        $routeProvider.when("/about", {
            templateUrl: "Views/About.html",
            controller: "AboutController"
        });
        $routeProvider.when("/blog", {
            templateUrl: "Views/Blog.html",
            controller: "BlogController"
        });
    });