import { Component } from '@angular/core';

import { getRandomString } from '../utils';

@Component({
  selector: '#home',
  template: `
    <div class="page home">
      <div class="container">
        <header></header>
        <h1>Home</h1>
        <p>This is a normal page, without any paywall, with premium & free posts</p>
        <ul>
          <li><a routerLink="/article/test">Premium article with default itemID</a></li>
          <li><a [routerLink]="'/article/' + articleID">Premium article with randomly generated itemID</a></li>
        </ul>
      </div>
    </div>
  `,
})
export default class Home {
  articleID = getRandomString()
}
