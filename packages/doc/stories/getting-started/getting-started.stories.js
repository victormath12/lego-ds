import { storiesOf } from "@storybook/html";

import { welcome, gettingStarted, aboutSoma, aboutStencil, contributing} from './introduction';
import { frameworks, react, angular, vue, html } from './frameworks';

const parameters = {
  options: {
    isToolshown: false,
    showPanel: false,
  }
};

storiesOf("Começando/Introdução", module)
  .addParameters(parameters)
  .add("Bem Vindo", () => welcome)
  .add("Como Começar", () => gettingStarted)
  .add("Como Contribuir", () => contributing)
  .add("Sobre o Soma", () => aboutSoma)
  .add("Sobre o Stencil", () => aboutStencil)

storiesOf("Começando/Frameworks Web", module)
  .addParameters(parameters)
  .add("Instalando", () => frameworks)
  .add("React", () => react)
  .add("Angular", () => angular)
  .add("Vue", () => vue)
  .add("HTML", () => html)
