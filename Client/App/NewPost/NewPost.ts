import { Component, OnInit } from "@angular/core";
import { NewPostService } from "./NewPostService";
import { EditorDirective } from "../Shared/Directives/EditorDirective";

declare let tinymce: any;

@Component ({
    selector: "new-post",
    templateUrl: "Client/App/NewPost/NewPost.html",
    styleUrls: ["Client/Styles/NewPost.css"],
    directives: [EditorDirective],
    providers: [NewPostService]
})

export class NewPostComponent implements OnInit {
    public title: string;
    public content: string;
    
    constructor(private newPostService: NewPostService) {
    }
    
    ngOnInit() {
        this.InitRichTextEditor();
    }

    public SubmitPost() {
        alert("Clicked submit post");
        //TODO
    }
    
    public Cancel() {
        alert("Clicked cancel");
    }

    private InitRichTextEditor() {
        tinymce.init({
            selector: "#main-text-area",
            schema: "html5"
        });
    }
} 