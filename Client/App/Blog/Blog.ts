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

    public DeleteBlog() {
        let result: boolean = window.confirm("Do you really want to delete article " + this.article.title);
        if(result) {
            this.service.DeleteBlog(this.article._id).subscribe(() => {
                this.BackToBlogList();
            });
        }
    }
}