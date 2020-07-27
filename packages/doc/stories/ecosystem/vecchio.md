# Vecchio

Além da documentação comum o Vecchio conta com relatório Cobertura de coverage.

## Descrição

Realiza a conexão de web componentes com React a partir do pattern de HOC (High Order Component). A utilização dessa biblioteca é necessária quando você faz uso de certas funcionalidades no React que apresentam falhas de integração com a API de CustomElement.

Para entender todas as falhas existentes entre a comunicação React <-> CustomElement, acesse a página [WebComponents Everywhere](https://custom-elements-everywhere.com/).

## Instalação

```sh
npm i vecchio
```

## Utilização

A utilização dos componentes segue o HTML, exemplo:

```js
// Import Vecchio.
import Vecchio from 'vecchio';

// Web component tagName.
const htmlMarkup = "";

// Create a bridge.
const SomaButton = Vecchio.connect(htmlMarkup);

// Use as ReactComponent.
export const MyComp = () => {
  // ... Your code.

  return (<SomaButton />);
}
```
