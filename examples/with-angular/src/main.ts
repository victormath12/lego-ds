import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { applyPolyfills, defineCustomElements } from '@lego-ds/core/loader';

// Soma DS
import { applyPolyfills as somaApplyPolyfills, defineCustomElements as somaDefineCustomElements } from '@lego-ds/html/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

applyPolyfills().then(() => {
  defineCustomElements()
});

// Soma DS
somaApplyPolyfills().then(() => {
  somaDefineCustomElements()
})
