import angular = require("angular");

export class NewPostController {
    private Title: string;
    private Author: string;
    private Content: string;


    constructor() {
        CKEDITOR.replace("newPostContent");
    }

    public SubmitPost() {
        //TODO need back end service to handle this
    }

    public Cancel() {
        alert("Navigate to home page!");
    }
}