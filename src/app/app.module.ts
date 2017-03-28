import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';

import { PulldownMenuComponent } from './go-pulldown-menu/component/pulldown-menu.component';

import { PulldownMenuDocument } from './go-pulldown-menu/doc/pulldown-menu.document';

const appRoutes: Routes = [
  {path: '', component: PulldownMenuDocument},
  { path: 'checkbox', component: PulldownMenuDocument },
  { path: 'textarea', component: PulldownMenuDocument },
  { path: 'textbox', component: PulldownMenuDocument },
  { path: 'texteditor', component: PulldownMenuDocument },
  { path: '**', component: PulldownMenuDocument }
];

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  declarations: [ 
    AppComponent,
    PulldownMenuComponent,
    PulldownMenuDocument
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
