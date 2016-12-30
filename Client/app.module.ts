import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing"

import { BlogModule } from "./App/Blog/Blog.module";
import { NewPostComponent } from "./App/NewPost/NewPost";
import { AboutInfoComponent } from "./App/About/AboutInfo";
import { BookComponent } from "./App/Book/Book";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        BlogModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NewPostComponent,
        AboutInfoComponent,
        BookComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}