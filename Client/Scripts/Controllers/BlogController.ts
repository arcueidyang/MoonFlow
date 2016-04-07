moonflow.controller("BlogController", function BlogController($scope) {
    $scope.articles = [];
    $scope.articles.push({
        title: "My First article"
    });
    $scope.articles.push({
        title: "My Second article"
    });
    $scope.articles.push({
        title: "My Third article"
    });

    $scope.GetArticles = function() {
        //TODO
    };

    $scope.GetArticle = function(id) {
        //TODO
    };
});