import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";

import { Article } from "../Blog/Article";
import { Observable } from "rxjs/Observable";

@Injectable()
export class NewPostService {
    private newPostUrl = "api/article/"

    constructor(private http: Http) {}

    public PostArticle(article: Article) {
        let body = JSON.stringify(article);
        let headers = new Headers({ "Content-Type": "application/json"});
        let options = new RequestOptions({headers: headers});

        this.http.post(this.newPostUrl, body, options).subscribe(this.HandleResponse);
    }

    private HandleResponse(response: Response) {
        let body = response.json();
        return body || {};
    }

}