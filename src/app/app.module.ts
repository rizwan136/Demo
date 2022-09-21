import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Youtube1Component } from './youtube1/youtube1.component';
import { Youtube2Component } from './youtube2/youtube2.component';
import { HeaderComponent } from './header/header.component';
import { Url1Component } from './url1/url1.component';
import { Url2Component } from './url2/url2.component';

@NgModule({
  declarations: [
    AppComponent,
    Youtube1Component,
    Youtube2Component,
    HeaderComponent,
    Url1Component,
    Url2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
