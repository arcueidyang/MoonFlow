import { NgModule }       from "@angular/core";
import { CommonModule }   from "@angular/common";
import { FormsModule }    from "@angular/forms";

import { BlogRoutingModule } from "./Blog.routing";

import { BlogListComponent } from "./BlogList";
import { BlogComponent } from "./Blog";

import { BlogService } from "./BlogService";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BlogRoutingModule
    ],
    declarations: [
        BlogListComponent,
        BlogComponent
    ],
    providers: [
        BlogService
    ]
})

export class BlogModule {}