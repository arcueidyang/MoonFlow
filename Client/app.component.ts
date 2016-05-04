import { Component } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { BlogComponent } from "./Blog/Blog";
import { NewPostComponent } from "./NewPost/NewPost";
import { AboutInfoComponent } from "./About/AboutInfo";

@Component({
    selector: "app-root",
    template: "AppBase.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: "/blog", name: "blog", component: BlogComponent },
    { path: "/newPost", name: "new post", component: NewPostComponent },
    { path: "/about", name:"about", component: AboutInfoComponent, useAsDefault: true }
])

export class AppComponent { 
    
}

