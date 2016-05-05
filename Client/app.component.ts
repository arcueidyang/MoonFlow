import { Component } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { BlogComponent } from "./Blog/Blog";
import { NewPostComponent } from "./NewPost/NewPost";
import { AboutInfoComponent } from "./About/AboutInfo";

@Component({
    selector: "app-root",
    templateUrl: "Client/AppBase.html",
    directives: [ROUTER_DIRECTIVES, BlogComponent, NewPostComponent, AboutInfoComponent],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: "/Blog", name: "Blog", component: BlogComponent },
    { path: "/NewPost", name: "NewPost", component: NewPostComponent },
    { path: "/About", name:"About", component: AboutInfoComponent, useAsDefault: true }
])

export class AppComponent { 
    
}

