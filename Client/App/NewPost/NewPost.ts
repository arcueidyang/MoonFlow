import { Component } from "@angular/core";
import { NewPostService } from "./NewPostService";
import { EditorDirective } from "./EditorDirective";
import { HighlightDirective } from "./HighlightDirective";

@Component ({
    selector: "new-post",
    templateUrl: "Client/App/NewPost/NewPost.html",
    styleUrls: ["Client/Styles/NewPost.css"],
    directives: [EditorDirective, HighlightDirective]
})

export class NewPostComponent {
    public title: string;
    public content: string;
    
    constructor(private newPostService: NewPostService) {
    }
    
    public SubmitPost() {
        alert("Clicked submit post");
        //TODO
    }
    
    public Cancel() {
        alert("Clicked cancel");
    }
} 