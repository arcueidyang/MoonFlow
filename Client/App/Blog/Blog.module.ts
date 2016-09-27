import { NgModule }       from "@angular/core";
import { CommonModule }   from "@angular/common";
import { FormsModule }    from "@angular/forms";

import { BlogListComponent } from "./BlogList";
import { BlogComponent } from "./Blog";
import { BlogRouting } from "./Blog.routing";

import { BlogService } from "./BlogService";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BlogRouting
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