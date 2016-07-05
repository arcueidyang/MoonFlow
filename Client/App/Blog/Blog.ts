import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import { Article } from "./Article";

@Component({
    selector: "blog-home",
    templateUrl: "Client/App/Blog/Blog.html",
    styleUrls: ["Client/Styles/Blog.css"]
})

export class BlogComponent implements OnInit{
    public articles: Array<Article>;
    public errorMessage: string;

    private _blogService: BlogService;

    constructor(service: BlogService) {
        this._blogService = service;
    }

    public ngOnInit() {
        this.GetAllArticles();
    }
    
    private GetAllArticles() {
        this._blogService.getBlogs()
                            .subscribe(
                                articles => this.articles = articles,
                                error => this.errorMessage = error);
    }

    private GetArticle() {
        
    }
    
}