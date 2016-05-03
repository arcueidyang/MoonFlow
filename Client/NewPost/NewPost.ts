import { Component } from "angular2/core";

@Component ({
    selector: "new-post",
    template: "./Blog.html"
})

export class NewPost {
    public title: string;
    public content: string;
    
    constructor() {
        
    }
    
    public SubmitPost() {
        alert("Clicked submit post");
    }
    
    public Cancel() {
        alert("Clicked cancel");
    }
} 