import { Component } from "@angular/core";

@Component ({
    selector: "new-post",
    templateUrl: "Client/App/NewPost/NewPost.html",
    styleUrls: ["Client/Styles/NewPost.css"]
})

export class NewPostComponent {
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