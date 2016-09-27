import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { routing, appRoutingProviders }  from './app.routing';

import { BlogListComponent } from "./App/Blog/BlogList";
import { NewPostComponent } from "./App/NewPost/NewPost";
import { AboutInfoComponent } from "./App/About/AboutInfo";
import { BookComponent } from "./App/Book/Book";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        BlogListComponent,
        NewPostComponent,
        AboutInfoComponent,
        BookComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]

})

export class AppModule {}