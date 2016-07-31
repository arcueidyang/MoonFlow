import { Component } from "@angular/core";
import { NewPostService } from "./NewPostService";
import { EditorDirective } from "../Shared/EditorDirective";

@Component ({
    selector: "new-post",
    directives: [EditorDirective],
    templateUrl: "Client/App/NewPost/NewPost.html",
    styleUrls: ["Client/Styles/NewPost.css"]
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