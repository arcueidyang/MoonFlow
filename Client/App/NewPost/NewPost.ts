import { Article } from "../Blog/Article";
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
        let newArticle = new Article();
        newArticle.author = "Yang";
        newArticle.body = this.content;
        newArticle.creationTime = Date.now().toString();
        newArticle.genre = "test";
        newArticle.lastEditTime = Date.now().toString();
        newArticle.title = this.title;
        this.newPostService.PostArticle(newArticle);
    }
    
    public Clear() {
        var isClear = window.confirm("Do you really want to clear the post?");
        if(isClear) {
            this.title = "";
            this.content = "";    
        }
    }

    private InitRichTextEditor() {
        tinymce.init({
            selector: "#main-text-area",
            schema: "html5",
            height: 500,
            resize: false
        });
    }
} 