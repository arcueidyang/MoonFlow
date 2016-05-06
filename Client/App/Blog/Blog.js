"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Article_1 = require("./Article");
var BlogComponent = (function () {
    function BlogComponent() {
        this.InitializeArticles();
    }
    BlogComponent.prototype.InitializeArticles = function () {
        this.articles = [];
        this.articles.push(new Article_1.Article("111", "First article", "this is first article"));
        this.articles.push(new Article_1.Article("222", "Second article", "this is second article"));
        this.articles.push(new Article_1.Article("333", "Third article", "this is third article"));
        this.articles.push(new Article_1.Article("444", "Fourth article", "this is fourth article"));
        this.articles.push(new Article_1.Article("555", "Fifth article", "this is fifth article"));
    };
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: "blog-home",
            templateUrl: "Client/App/Blog/Blog.html",
            styleUrls: ["Client/Styles/Blog.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=Blog.js.map