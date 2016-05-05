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
var router_deprecated_1 = require("@angular/router-deprecated");
var Blog_1 = require("./App/Blog/Blog");
var NewPost_1 = require("./App/NewPost/NewPost");
var AboutInfo_1 = require("./App/About/AboutInfo");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "app-root",
            templateUrl: "Client/AppBase.html",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, Blog_1.BlogComponent, NewPost_1.NewPostComponent, AboutInfo_1.AboutInfoComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            { path: "/Blog", name: "Blog", component: Blog_1.BlogComponent },
            { path: "/NewPost", name: "NewPost", component: NewPost_1.NewPostComponent },
            { path: "/About", name: "About", component: AboutInfo_1.AboutInfoComponent, useAsDefault: true }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map