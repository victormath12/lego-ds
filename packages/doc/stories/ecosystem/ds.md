# Design System

Além da documentação comum o Soma - Design System conta com relatório Cobertura de coverage e com um arquivo de exemplo.

## Descrição

DesOps.Soma.DS é responsável pela criação e utilização de temas. O Soma.DS funciona como um Event Emitter, toda mudança que acontece em `use` é refletida no `on('change')`, dentro dele você pode utilizar qualquer `ThemeProvider`.

## Instalação

```shell
npm i @soma/ds
```

## Utilização

**Aplicações Javascript *(verificar pasta example)***

```js
SomaDS.on('change', (theme) => {
  // change your theme
});
SomaDS.use('xp');
```

**SCSS**

```scss
@import 'node_modules/@soma/ds/{{ themename }}/*.scss';
```

**Utilização com @lego-ds/js-css**

```js
import { ThemeProvider } from "@lego-ds/js-css";
import SomaDS from '@soma/ds';

SomaDS.on('change', (theme) => {
  ThemeProvider.setValue(theme)
});

SomaDS.use('xp');
```

**Lista de *name* disponíveis:**

* xp
* placeholder (apenas para teste)

## Integração com Soma-Tokens

As folhas de tokens nos formatos scss/json/ios.json/xml também serão exportadas para o repositório [DesOps.Soma.Tokens](https://xpinvestimentos.visualstudio.com/Projetos/_git/DesOps.Soma.Tokens).

