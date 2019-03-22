import 'zone.js';
import 'core-js/es7/reflect';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import App from './modules/App';

platformBrowserDynamic().bootstrapModule(App);
