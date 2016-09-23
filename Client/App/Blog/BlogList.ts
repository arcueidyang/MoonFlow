import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { Article } from "./Article";
import { BlogService } from "./BlogService";
import { BlogComponent } from "./Blog";

@Component({
    selector: "blog-home",
    templateUrl: "Client/App/Blog/BlogList.html",
    styleUrls: ["Client/Styles/Blog.css"],
    directives: [ROUTER_DIRECTIVES],

    providers:[
                  ROUTER_PROVIDERS,
                  BlogService,
              ]
})

@RouteConfig([
    { path: "/:id", name: "Blog", component: BlogComponent, useAsDefault: false },
    { path: ""}
])

export class BlogListComponent implements OnInit{
    public articles: Array<Article> = [];
    public errorMessage: string;

    private _blogService: BlogService;

    constructor(service: BlogService) {
        this._blogService = service;
    }

    public ngOnInit() {
        this.GetAllArticles();
    }
    
    private GetAllArticles() {
        this._blogService.GetBlogs().subscribe(
            articles => this.articles = articles,
            error => this.errorMessage = error);
    }    
}