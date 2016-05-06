import { Component } from "@angular/core";
import { Article } from "./Article";

@Component({
    selector: "blog-home",
    templateUrl: "Client/App/Blog/Blog.html",
    styleUrls: ["Client/Styles/Blog.css"]
})

export class BlogComponent {
    public articles: Array<Article>;
    
    constructor() {
        this.InitializeArticles();
    }
    
    private InitializeArticles() {
        this.articles = [];
        this.articles.push(new Article("111", "First article", "this is first article"));
        this.articles.push(new Article("222", "Second article", "this is second article"));
        this.articles.push(new Article("333", "Third article", "this is third article"));
        this.articles.push(new Article("444", "Fourth article", "this is fourth article"));
        this.articles.push(new Article("555", "Fifth article", "this is fifth article"));
    }
    
    ngOnInit() {
        
    }
}