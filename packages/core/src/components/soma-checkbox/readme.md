# soma-checkbox
[![Status](https://img.shields.io/badge/status-review-yellow)]()
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)]()

### O Componente soma-checkbox permite ao usuário selecionar um ou mais itens de um conjunto.

As caixas de seleção podem ser usadas para ativar ou desativar uma opção.

Se houver várias opções aparecendo em uma lista, você poderá preservar espaço usando as caixas de seleção em vez de do `soma-switch`. Se você tiver uma única opção, evite usar uma caixa de seleção e use o `soma-switch`.

&nbsp;

## Exemplo de uso:

#### soma-checkbox com label

```html
<soma-checkbox label="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
```

#### soma-checkbox inverse

```html
<soma-checkbox inverse />
```

#### soma-checkbox disabled

```html
<soma-checkbox disabled />
```
&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                      | Type      | Default     |
| ----------- | ------------ | ------------------------------------------------ | --------- | ----------- |
| `ariaLabel` | `aria-label` | [*] Define string de acessibilidade `aria-label` | `string`  | `undefined` |
| `checked`   | `checked`    | Define se está selecionado                       | `boolean` | `false`     |
| `disabled`  | `disabled`   | Desabilita o componente                          | `boolean` | `false`     |
| `inverse`   | `inverse`    | Modifica o tema para inverse                     | `boolean` | `false`     |
| `label`     | `label`      | Define a `label`                                 | `string`  | `undefined` |
| `value`     | `value`      | O valor do checkbox                              | `any`     | `undefined` |


## Events

| Event         | Description                                                | Type                   |
| ------------- | ---------------------------------------------------------- | ---------------------- |
| `soma-blur`   | Emite um `CustomEvent` quando há perda de foco             | `CustomEvent<void>`    |
| `soma-change` | Emite um `CustomEvent` com `checked` quando `checked` muda | `CustomEvent<boolean>` |
| `soma-focus`  | Emite um `CustomEvent` quando há foco                      | `CustomEvent<void>`    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
