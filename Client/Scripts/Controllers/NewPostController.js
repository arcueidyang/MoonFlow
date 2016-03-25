/**
 * Created by Yang on 3/22/16.
 */

moonflow.controller("NewPostController", function NewPostController($scope) {

    $scope.newPost = {
        title: "",
        author: "",
        content: "",
    };

    $scope.submitPost = function() {
        alert($scope.newPost.title  + " is getting posted successfully!");
    };

    $scope.cancel = function() {
        alert("Navigate to home page!");
    };
});