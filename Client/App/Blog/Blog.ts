import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Article } from "./Article";
import { BlogService } from "./BlogService";

@Component({
    selector: "blog-body",
    templateUrl: "Client/App/Blog/Blog.html",
    styleUrls: ["Client/Styles/Blog.css"],
    providers:[
                  BlogService,
              ]
})

export class BlogComponent implements OnInit{

    private article: Article = new Article();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: BlogService ) {}

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params["id"];
            this.service.GetBlog(id).subscribe((article: Article) => {
                this.article = article;   
            });
        });
    }

    public BackToBlogList() {
        this.router.navigate(["Blog"]);
    }

}