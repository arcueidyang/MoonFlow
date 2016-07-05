import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Article } from "../Blog/Article";
import { Observable } from "rxjs/Observable";

@Injectable()
export class NewPostService {
    private newPostUrl = "api/article/"

    constructor(private http: Http) {}

    public PostArticle(article: Article) {
        this.http.post(this.newPostUrl, JSON.stringify(article)).subscribe(this.HandleResponse);
    }

    private HandleResponse(response: Response) {
        let body = response.json();
        return body.data || {};
    }

}