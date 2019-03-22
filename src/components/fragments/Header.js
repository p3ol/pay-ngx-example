import { Component } from '@angular/core';

import { getRandomString } from '../../utils';

@Component({
  selector: 'header',
  template: `
    <div class="mb-5">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a routerLink="/" class="navbar-brand">Newspaper</a>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav">
            <a routerLink="/" class="nav-item nav-link">Home</a>
            <a routerLink="/article/test" class="nav-item nav-link">Premium article (default itemID)</a>
            <a [routerLink]="'/article/' + articleID" class="nav-item nav-link">Premium article (random itemID)</a>
          </div>
        </div>
      </nav>
    </div>
  `,
})
export default class Header {
  articleID = getRandomString()
}
