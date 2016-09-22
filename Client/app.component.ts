import { Component } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { BlogListComponent } from "./App/Blog/BlogList";
import { NewPostComponent } from "./App/NewPost/NewPost";
import { AboutInfoComponent } from "./App/About/AboutInfo";
import { BookComponent } from "./App/Book/Book";

@Component({
    selector: "app-root",
    templateUrl: "Client/AppBase.html",
    directives: [
                    ROUTER_DIRECTIVES,
                    BlogComponent,
                    NewPostComponent,
                    AboutInfoComponent,
                    BookComponent
                ],
    providers: [
                    ROUTER_PROVIDERS
               ]
})

@RouteConfig([
    { path: "/Blog", name: "Blog", component: BlogComponent, useAsDefault: true },
    { path: "/NewPost", name: "NewPost", component: NewPostComponent },
    { path: "/About", name:"About", component: AboutInfoComponent },
    { path: "/Book", name: "Book", component: BookComponent }
])

export class AppComponent { 
    
}

