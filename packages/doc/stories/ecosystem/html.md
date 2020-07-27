# HTML

## Descrição

Web Components que implementam Soma Design System.


## Instalação

```sh
npm i @soma/html
```

## Utilização

A utilização dos componentes segue o HTML, exemplo:
```html
  <soma-button id="unique-button-id" size="lg" type="primary">Primary Button LG</soma-button>
```

Propriedades também podem ser setadas via javascript:
```js
  const el = document.getElementById('unique-button-id');
  el.size = "md";
  el.type = "secondary";
  el.onclick = function(event) { ... }
```

## Documentação

A documentação está disponível no [storybook](https://soma-sb.xpi.com.br), e as recomendações estão disponíveis no [zeroheight](https://soma.xpi.com.br).

## Licença

Propietária.
