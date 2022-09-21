import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Url1Component } from './url1/url1.component';
import { Url2Component } from './url2/url2.component';
import { Youtube1Component } from './youtube1/youtube1.component';
import { Youtube2Component } from './youtube2/youtube2.component';

const routes: Routes = [
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path: 'youtube1',
    component: Youtube1Component,
    children: [
      {
        path: 'url1',
        component: Url1Component
      }
    ]
  },
  {
    path: 'youtube2',
    component:Youtube2Component,
    children:[
      {
        path:'url2',
        component:Url2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
