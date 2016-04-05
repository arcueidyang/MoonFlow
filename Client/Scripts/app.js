var angular = require("angular");
var moonflow = angular
    .module("moonflow", ["ngRoute"])
    .route(function ($routeProvider) {
    $routeProvider.when("/blog", {
        controller: "BlogController",
        templateUrl: "Views/Blog.html"
    }).when("/newPost", {
        controller: "NewPostController",
        templateUrl: "Views/NewPost.html"
    }).when("/about", {
        controller: "AboutController",
        templateUrl: "Views/About.html"
    }).otherwise({});
});
module.exports = moonflow;
//# sourceMappingURL=app.js.map