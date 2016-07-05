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
                        .subscribe(this.ExtractData);
    }

    public GetBlog(id: string) {

    }

    private ExtractData(response: Response) {
        //TODO handle data
        response;
    }

}