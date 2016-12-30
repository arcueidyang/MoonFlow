import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BlogListComponent } from "./App/Blog/BlogList";
import { NewPostComponent } from "./App/NewPost/NewPost";
import { AboutInfoComponent } from "./App/About/AboutInfo";
import { BookComponent } from "./App/Book/Book";

const appRoutes: Routes = [
    { path: "Blog", component: BlogListComponent },
    { path: "NewPost", component: NewPostComponent },
    { path: "About", component: AboutInfoComponent },
    { path: "Book", component: BookComponent },
    { path: "", redirectTo: 'Blog', pathMatch: 'full'},
    { path: "**", component: BlogListComponent }
];    

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}