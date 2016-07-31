import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Article } from "./Article";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BlogService {
    private _getBlogUrl = "api/articles/";
    
    constructor(private http: Http) {}

    public GetBlogs() {
        return this.http.get(this._getBlogUrl)
                        .map(this.ExtractData)
                        .catch();
    }

    public GetBlog(id: string) {
        return this.http.get(this._getBlogUrl + id)
                        .subscribe();
    }

    private ExtractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }
}