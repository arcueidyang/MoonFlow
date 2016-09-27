import { NgModule }       from "@angular/core";
import { CommonModule }   from "@angular/common";
import { FormsModule }    from "@angular/forms";

import { BlogListComponent } from "./BlogList";
import { BlogComponent } from "./Blog";
import { BlogRouting } from "./Blog.routing";

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

    ]

})

export class BlogModule {}