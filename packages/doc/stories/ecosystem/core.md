# Core

## Descrição

Você pode utilizar o @lego-ds/utils mesmo sem utilizar os componentes. O core é composto de decorators, types e utilitários que fornecem recursos para o @soma/html.

### Decorators

- **Required**: Torna a propriedade `required`, caso a propriedade não seja passada um console.error é disparado.

### Types

- **TagType**: `string | [string]`
- **DateType**: `string | number`
- **AnchorOriginType**: `{ horizontal: string, vertical: string }`
- **InputBankPasswordSingleType**: `[number, number]`
- **InputBankPasswordType**: `InputBankPasswordSingleType[]`
- **ClassNameConfigOption**: `{ [key: string]: string | Function | boolean }`
- **ClassNameConfig**: `{ root: string, options?: Array<ClassNameConfigOption> }`
- **OnClickType**: `((event: MouseEvent) => any) | undefined`

### Utils

- **_get**: implementa o _get do lodash.
- **shuffle**: embaralha um array.
- **getClassName**: padroniza o nome das classes.
- **isLegacyBrowser**: verifica se o navegador é Edge ou IE11.
- **isIE11**: verifica se o navegador é IE11.
- **handleAnchorOrigin**: transpila posição horizontal e vertical para css.

## Instalação

@lego-ds/utils é uma solução inner-source, podendo ser instalada utilizando o NPM pelo registry da XP (PackagesXP) com o comando abaixo:

```sh
npm i @lego-ds/utils
```

## Utilização

**Exemplo: decorators**

```ts
import { decorators } from '@lego-ds/utils';

const Required = decorators.Required;

@Component({...})
export class Button {

  @Prop() @Required() size: string;

  render() {...}
}
```

**Exemplo: types**

```ts
import { DateType } from '@lego-ds/utils';

@Component({
  tag: 'soma-card-media-description',
  shadow: true
})
export class SomaCardMediaDescription {
  @Prop() date: DateType;
```

**Exemplo: utilitários**

```ts
import { utils } from '@lego-ds/utils';

const { getClassName } = utils;

@Component({
  tag: 'soma-button',
  shadow: true
})
export class SomaButton {
  render() {
    const className = getClassName({
      root: 'soma-button',
      options: [
        { modifier: modifier },
        { size: size },
        { inverse: inverse }
      ]
    });

    return (<Host> <button class={className}> </button> </Host>)
  }
}
```
