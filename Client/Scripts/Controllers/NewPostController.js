/**
 * Created by Yang on 3/22/16.
 */

moonflow.controller("NewPostController", function NewPostController($scope) {

    CKEDITOR.replace("newPostContent");

    $scope.newPost = {
        title: "",
        author: "",
        content: "",
    };

    $scope.submitPost = function() {
        //TODO need back end service to handle this
    };

    $scope.cancel = function() {
        alert("Navigate to home page!");
    };
});