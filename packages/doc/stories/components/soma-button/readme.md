# soma-button

### O componente soma-button permite que os usuários tomem ações e decisões com um básico toque.

Botões comunicam ações que os usuários podem realizar.

&nbsp;

## Exemplo de uso:

#### soma-button básico

```html
<soma-button modifier="primary" size="md" aria-label="Clique para...">Button</soma-button>
```

#### soma-button com ícone

```html
<soma-button modifier="primary" size="md" icon="alert-circle" aria-label="Clique para...">Button</soma-button>
```

#### soma-button secondary small

```html
<soma-button modifier="secondary" size="sm" aria-label="Clique para...">Button</soma-button>
```

#### soma-button ghost large

```html
<soma-button modifier="ghost" size="lg" aria-label="Clique para...">Button</soma-button>
```

#### soma-button ghost inverse

```html
<soma-button modifier="ghost" size="md" inverse aria-label="Clique para...">Button</soma-button>
```

#### soma-button disabled

```html
<soma-button modifier="primary" size="md" disabled aria-label="Clique para...">Button</soma-button>
```


&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                            | Type                              | Default     |
| ----------- | ------------ | ---------------------------------------------------------------------- | --------------------------------- | ----------- |
| `ariaLabel` | `aria-label` | [*] Use para definir o valor do atributo `aria-label`                  | `string`                          | `undefined` |
| `disabled`  | `disabled`   | Desabilita o componente                                                | `boolean`                         | `undefined` |
| `icon`      | `icon`       | Muda o ícone                                                           | `string`                          | `undefined` |
| `inverse`   | `inverse`    | Muda o tema para inverse                                               | `boolean`                         | `undefined` |
| `modifier`  | `modifier`   | [*] Altere o tipo para mudar o estilo: `primary`, `secondary`, `ghost` | `string`                          | `'primary'` |
| `size`      | `size`       | [*] Altere o tamanho com os valores: `sm`, `md`, `lg`                  | `string`                          | `'md'`      |
| `type`      | `type`       | O tipo do botão                                                        | `"button" \| "reset" \| "submit"` | `'button'`  |


## Events

| Event        | Description                                                | Type                      |
| ------------ | ---------------------------------------------------------- | ------------------------- |
| `soma-blur`  | Emite um `CustomEvent` quando há perda de foco             | `CustomEvent<void>`       |
| `soma-click` | Emite um `CustomEvent` com o `MouseEvent` quando há clique | `CustomEvent<MouseEvent>` |
| `soma-focus` | Emite um `CustomEvent` quando há foco                      | `CustomEvent<void>`       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
