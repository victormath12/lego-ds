# Como Começar

As instruções abaixo abordam como usar o Soma HTML sozinho e com diversos frameworks.

## Pré-requisitos

Você deve ter o Node.js v9.10+ instalado.

## Instalando

A Lib está disponível para instalação via npm/yarn. Para instalar rode o seguinte comando na raiz do seu projeto.

```sh
npm i @soma/html
```

E pronto você está apto para utilizar o Soma Design System. Caso você esteja utilizando React recomendamos instalar o soma@/react em vez do @soma/html.

```sh
npm i @soma/react
```

## Hello World

### Stencil

Para aplicações Stencil consumindo esta biblioteca é preciso apenas importar no entry point `src/index.ts`:

```js
import "@soma/html";
```

E utilizar normalmente:

```html
<soma-typography variant="caption">Hello World</soma-typography>
```

### React
Para aplicações React basta incluir nossa library específica, ela vai aplicar todos os polyfills necessários.

```js
import { SomaTypography } from "@soma/react";
```

E utilizar normalmente:

```js
  <SomaTypography variant="caption">Hello World</SomaTypography>
```

### Angular
Para aplicações Angular precisamos seguir duas etapas

1. incluir  `CUSTOM_ELEMENTS_SCHEMA` nos módulos que vão usar os componentes
2. Chamar o `defineCustomElements` () em seu `main.ts` 

**Incluindo `CUSTOM_ELEMENTS_SCHEMA`**

```js
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

**Definindo `defineCustomElements`**

```js
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Note: loader import location set using "esmLoaderPath" within the output target config
import { defineCustomElements } from 'test-components/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements();
```

**Edge e IE11 Polyfills**

```js
import { applyPolyfills, defineCustomElements } from 'test-components/loader';
...
applyPolyfills().then(() => {
  defineCustomElements()
})
```

E utilizar normalmente:

```html
<soma-typography variant="caption">Hello World</soma-typography>
```

### Vue
Para um projeto VUE você precisa modificar a aplicação, definir os Custom Elements e informar ao compilador VUE quais elementos ignorar durante a compilação, isso pode ser feito no arquivo `main.js`

```js
import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from 'test-components/loader';

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/test-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App)
}).$mount('#app');
```

Os componentes vão ficar disponíveis em qualquer componente VUE

```js
render() {
  return (
    <div>
      <soma-typography variant="caption"></soma-typography>
    </div>
  )
}
```

### Ember
Para usar o Soma HTML no ember vamos utilizar o ember-cli-stencil, ela já vai:

Importar os arquivos necessários para o seu vendor.js
Copiar as definições de componente no diretório de ativos opcionalmente, gerando um componente wrapper para melhor compatibilidade com versões mais antigas do Ember

```sh
ember install ember-cli-stencil
```

Após a instalação você já pode começar a usar os componentes em seus arquivos.

```html
<soma-typography variant="caption">Hello World</soma-typography>
```