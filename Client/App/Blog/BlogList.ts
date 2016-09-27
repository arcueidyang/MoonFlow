import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Article } from "./Article";
import { BlogService } from "./BlogService";
import { BlogComponent } from "./Blog";

@Component({
    selector: "blog-home",
    templateUrl: "Client/App/Blog/BlogList.html",
    styleUrls: ["Client/Styles/Blog.css"],

    providers:[
                  BlogService,
              ]
})


export class BlogListComponent implements OnInit{
    public articles: Array<Article> = [];
    public errorMessage: string;

    constructor(
        private router: Router,
        private service: BlogService) {
    }

    public ngOnInit() {
        this.GetAllArticles();
    }
    
    private GetAllArticles() {
        this.service.GetBlogs().subscribe(
            articles => this.articles = articles,
            error => this.errorMessage = error);
    }    
}