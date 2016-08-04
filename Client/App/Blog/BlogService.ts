import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Article } from "./Article";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class BlogService {
    private _getBlogUrl = "api/article/";
    
    constructor(private http: Http) {}

    public GetBlogs() {
        return this.http.get(this._getBlogUrl)
                        .map(this.ExtractData)
                        .catch(this.HandleError);
    }

    public GetBlog(id: string) {
        return this.http.get(this._getBlogUrl + id)
                        .subscribe();
    }

    private ExtractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private HandleError(error: any) {
        let errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}