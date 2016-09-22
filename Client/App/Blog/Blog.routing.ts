import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListComponent } from "./BlogList";
import { BlogComponent } from "./Blog";

const BlogRoutes : Routes = [
    { path: "Blog", component: BlogListComponent },
    { path: "Blog/:id", component: BlogComponent }
]

export const BlogRouting : ModuleWithProviders = RouterModule.forChild(BlogRoutes);