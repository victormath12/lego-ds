# soma-text-field
[![Status](https://img.shields.io/badge/status-review-yellow)]()
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)]()

### O componente soma-text-field permite que os usuários digitem e editem texto.

Campos de texto permitem que os usuários insiram texto em uma interface de usuário. Eles geralmente aparecem em formulários e diálogos.

&nbsp;

## Exemplo de uso:

#### soma-text-field básico
```html
<soma-text-field label="label" aria-label="digite..."></soma-text-field>
```

#### soma-text-field feedback success
```html
<soma-text-field feedback="success" message="feedback message" label="label" aria-label="digite..."></soma-text-field>
```

#### soma-text-field icon disabled
```html
<soma-text-field label="label" icon="info-fill" disabled aria-label="digite..."></soma-text-field>
```

&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                            | Type      | Default     |
| ----------- | ------------ | ------------------------------------------------------ | --------- | ----------- |
| `ariaLabel` | `aria-label` | [*] Define string de acessibilidade `aria-label`       | `string`  | `undefined` |
| `disabled`  | `disabled`   | Desabilita o componente                                | `boolean` | `false`     |
| `feedback`  | `feedback`   | Define tipo do feedback: `error`, `success`            | `string`  | `undefined` |
| `icon`      | `icon`       | Habilita ícone no componente                           | `string`  | `undefined` |
| `inputId`   | `input-id`   | Define `id` da input e `for` do label                  | `string`  | `undefined` |
| `label`     | `label`      | Define a label do componente                           | `string`  | `undefined` |
| `message`   | `message`    | Define mensagem de feedback                            | `string`  | `undefined` |
| `name`      | `name`       | O nome do controle que é submetido junto com form data | `string`  | `undefined` |
| `type`      | `type`       | [*] Define tipo de input                               | `string`  | `"text"`    |
| `value`     | `value`      | Valor de input                                         | `string`  | `undefined` |


## Events

| Event         | Description                                          | Type                  |
| ------------- | ---------------------------------------------------- | --------------------- |
| `soma-blur`   | Emite um `CustomEvent` quando há perda de foco       | `CustomEvent<void>`   |
| `soma-change` | Emite um `CustomEvent` com o `value` quando há input | `CustomEvent<string>` |
| `soma-focus`  | Emite um `CustomEvent` quando há foco                | `CustomEvent<void>`   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
