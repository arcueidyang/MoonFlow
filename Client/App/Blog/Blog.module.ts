import { NgModule }       from "@angular/core";
import { CommonModule }   from "@angular/common";
import { FormsModule }    from "@angular/forms";

import { BlogListComponent } from "./BlogList";
import { BlogComponent } from "./Blog";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        BlogListComponent,
        BlogComponent
    ],
    providers: [

    ]

})

export class BlogModule {}