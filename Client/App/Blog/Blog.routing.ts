import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListComponent } from "./BlogList";
import { BlogComponent } from "./Blog";

const BlogRoutes : Routes = [
    { path: "Blog", component: BlogListComponent },
    { path: "Blog/:id", component: BlogComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(BlogRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class BlogRoutingModule {}