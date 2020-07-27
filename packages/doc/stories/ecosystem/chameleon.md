# @lego-ds/js-css

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

Solução CSS-in-JS desenvolvida para trabalhar em conjunto com o Stencil.

## Motivações

Atualmente no mercado não existe soluções para desenvolvimento de Custom Elements com CSS-in-JS que suporte diversas funcionalidades, como:

- Theme Provider
- Shadow CSS
- Shadow DOM

Pensando nisso, desenvolvemos o @lego-ds/js-css, primeira biblioteca para desenvolvimento CSS-in-JS com full-suport as funcionalidades acima e funcional nos principais browsers.

## Instalação

Por hora, @lego-ds/js-css é uma solução *inner-source*, podendo ser instalada utilizando o *NPM* pelo *registry* da XP (PackagesXP) com os comandos abaixo:

**Yarn**

```bash
yarn add @lego-ds/js-css
```

**NPM**

```bash
npm i @lego-ds/js-css
```

## Utilização

Embora seja uma solução CSS-in-JS, sua utilização difere as principais bibliotecas de mercado como StyledComponents, Emotion e JSS. Isso ocorre pela peculialidade de implementação da *API WebComponent*.

### Pré-requisitos

O compilador do Stencil executa diversas otimizações em tempo de compilação, uma delas é a remoção do *script* que realiza a execução de funções do ciclo de vida do componente caso **nenhum** componente do seu pacote o utilize.

Infelizmente, o compilador não é inteligente a ponto de verificar as depêndencias do pacote e por isso, pelo menos um componente do seu projeto deve implementar os seguintes métodos:

- componentWillLoad
- componentWillUpdate
- connectedCallback
- disconnectedCallback

Uma issue será aberta para a correção desse problema no repositório do Stencil de forma a remover esse requisito.

### Definindo o estilo de um componente

O Stencil utiliza do conceito de *decorators* para executar uma série de verificações do componente. Afim de seguir o mesmo padrão, para utilizar o @lego-ds/js-css é necessário importar um *decorator* que controla, junto ao componente, o ciclo de vida do estilo e efetua a sua aplicação. Além disso, é necessário importar uma *tagged function* (similar ao exportado pelo StyledComponents e Emotion) que efetua a "compilação" do CSS em conjunto as regras Stylis e interpolações.

Vamos ver como isso funciona na prática.

```typescript
import { Component, Host, h } from '@stencil/core';
import Adapt, { css } from '@lego-ds/js-css';

@Component({
  tag: 'xp-test',
  shadow: true
})
export class Test {
  @Prop() color: string;

  @Adapt({
    css: css`
      :host {
        background: ${props => props.color || 'red'};

        strong {
          color: red;
        }
      }
    `
  })
  render() {
    return (
      <Host>
        Ola <strong>Mundo</strong>!
      </Host>
    );
  }

  // Só é necessário em um componente.
  componentWillLoad() {}
  componentWillUpdate() {}
  connectedCallback() {}
  disconnectedCallback() {}
}
```

### Utilizando temas

Ao contrário das principais bibliotecas que utilizam da *Context API* do React, esse biblioteca utiliza de um conceito de *PubSub* (Publisher and Subscriber) para realizar a escuta de alterações no tema. Dessa forma, não existe um ponto focal de destribuição do tema como ocorre nas outras bibliotecas (Componente *Provider*), ela pode ocorrer de qualquer um lugar que tenha acesso ao @lego-ds/js-css.

#### Configurando o tema inicial

Antes de qualquer renderização é necessário configurar o tema inicial, para isso é possível utilizar o método *setValue* da classe *ThemeProvider* (exportado pelo @lego-ds/js-css), que recebe como parâmetro o tema.

**Obs**: O mesmo método pode ser utilizado para aplicar uma alteração ao tema.

```typescript
import { ThemeProvider } from "@lego-ds/js-css";

ThemeProvider.setValue({
  colors: {
    primary: 'red'
  }
});
```

#### Atualizando o tema

Para atualizar o tema, é necessário apenas disparar um evento de atualização. Este evento é o memso utilizado para realizar a configuração inicial, visto no tópico acima.

```typescript
import { Component, Host, h } from '@stencil/core';
import { ThemeProvider } from '@lego-ds/js-css';

@Component({
  tag: 'xp-button',
  shadow: true
})
export class ToggleTheme {
  @Prop() color: string;

  toggle() {
    const currentMode = ThemeProvider.theme.mode;

    if (currentMode === 'dark') {
      ThemeProvider.setValue({ mode: 'light' });
    } else {
      ThemeProvider.setValue({ mode: 'dark' });
    }
  }

  render() {
    return (
      <button onClick={() => this.toggle()}>
        Toggle mode
      </button>
    );
  }
}
```

#### Consumindo o tema

A variável tema fica disposta no objeto *props* do componente durante a montagem do estilo, assim como no StyledComponents e Emotion. Isso simplifica a forma de aplicação.

#### Caching

Para **modificar a marcação padrão** do cache podemos utilizar o markup dentro do adapt. A marcação default é a mesma do componente em html.

```typescript
@Adapt({
    css: css`
      ...
    `,
    markup: 'xp-component',
  })
```

#### Palavras reservadas

* theme: não utilizar theme como props, pode afetar o comportamento do componente com o @lego-ds/js-css.