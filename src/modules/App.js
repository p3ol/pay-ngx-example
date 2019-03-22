import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import Header from '../components/fragments/Header';
import App from '../components/App';
import Home from '../components/Home';
import Article from '../components/Article';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: Home },
      { path: 'article/:id', component: Article },
    ]),
  ],
  declarations: [
    App,
    Header,
    Home,
    Article,
  ],
  bootstrap: [
    App,
  ],
  providers: [],
})
export default class AppModule {}
