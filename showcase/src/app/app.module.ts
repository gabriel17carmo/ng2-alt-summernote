import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SummernoteModule} from "../../../src/summernote.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SummernoteModule //https://github.com/angular/angular/issues/15767
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
