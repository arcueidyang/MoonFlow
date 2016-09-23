import { ModuleWithProviders } from "@angular/core";
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
    { path: "", component: BlogListComponent }
];    

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);