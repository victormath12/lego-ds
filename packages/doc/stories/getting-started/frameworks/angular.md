Usando o soma Web na sua aplicação web você precisará realizar alguns passos para funcionamento dos web-components, 
todos os passos de instalação e implementaçãos dos componentes estão detalhados abaixo.


## Instalando

**1. Web Components**

Pacote que contém todos os web components que implementam o Soma Design System.

```js
npm i @soma/html

// ou se estiver usando yarn:

yarn add @soma/html
```

**2. Design Tokens & Temas (Opcional)**

Pacote que contém os tokens de estilo e a engine de tematização (XP, Clear, Rico, etc), [clique aqui e entenda como funciona]().

```js
npm i @soma/ds

// ou se estiver usando yarn:

yarn add @soma/ds
```

## Implementando

**1. Incluindo o `CUSTOM_ELEMENTS_SCHEMA`**

Incluindo o `CUSTOM_ELEMENTS_SCHEMA` no modulo da sua aplicação habilita o uso dos web components no HTML dos seus templates sem que o compilador produza erros.
Esse código deve ser adicionado no **`app.module.ts`** e em todos os outros módulos que usarão os web components do Soma:

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

**2. Definindo o `defineCustomElements`**

Nossa coleção de componentes inclui uma main function usada para carregar os nossos web-components. Essa função se chama `defineCustomElements()` e precisa ser chamada durante o bootstraping da sua aplicação, no caso do Angular deve ser incluido no `main.ts` como no exemplo a seguir:

```js
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/*
* Importa dos polyfills e loaders do soma web
*/
import { applyPolyfills, defineCustomElements } from '@soma/html/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

/*
* Aplica os polyfills de web-components para IE11 e Edge
* e define os web-components na sua aplicação Angular
*/
applyPolyfills().then(() => {
  defineCustomElements()
})
```

**3. Mandou bem! Agora sinta-se livre para usar os componentes do Soma 🎉**

```html
<soma-typography variant="caption">Hello Soma Design System</soma-typography>
```

## Próximos passos