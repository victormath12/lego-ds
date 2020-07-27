import { markdown, pageTitle } from '../../../utils/templates';

import welcomeMd from "./welcome.md";
import gettingStartedMd from "./getting-started.md";
import aboutSomaMd from "./about-soma.md";
import aboutStencilMd from "./about-stencil.md";
import contributingMd from "./contributing.md";

const welcome = markdown(
  {
    content: welcomeMd,
    footer: `
      <soma-button data-sb-story="Como Começar">Quero usar</soma-button>
      <soma-button modifier="secondary" data-sb-story="Como Contribuir">Quero Contribuir</soma-button>
    `,
  }
);

const gettingStarted = markdown(
  {
    header: pageTitle('Começando com o Soma Design System'),
    content: gettingStartedMd,
    footer: `
      <div style="display: flex;">
        <soma-card style="margin: 0 8px; cursor: pointer;" data-sb-story="Sobre o Soma">
          <soma-card-header icon="info-fill">
            <soma-typography modifier="heading-6" variant="heading" data-sb-story="Sobre o Soma">
              Por que usar o Soma no seu projeto web?
            </soma-typography>
          </soma-card-header>
          <soma-card-content>
            <soma-typography variant="description" data-sb-story="Sobre o Soma">
              Entenda os benefícios de usar a biblioteca de componentes em seu projeto e quais recursos você ganha ao utilizar o Soma.
            </soma-typography>
          </soma-card-content>
          <soma-card-actions>
          </soma-card-actions>
        </soma-card>

        <soma-card style="margin: 0 8px; cursor: pointer;" data-sb-story="Sobre o Stencil">
          <soma-card-header icon="info-fill">
            <soma-typography modifier="heading-6" variant="heading" data-sb-story="Sobre o Stencil">
              Por que Stencil e Web Components?
            </soma-typography>
          </soma-card-header>
          <soma-card-content>
            <soma-typography variant="description" data-sb-story="Sobre o Stencil">
              Entenda as razões pelo qual o Soma Web foi contruído com Web Components através do Toolchain Stencil.
            </soma-typography>
          </soma-card-content>
          <soma-card-actions>
          </soma-card-actions>
        </soma-card>

        <soma-card style="margin: 0 8px; cursor: pointer;" data-sb-story="Frameworks Web">
          <soma-card-header icon="info-fill">
            <soma-typography modifier="heading-6" variant="heading">
              Como usar o soma no meu framework web?
            </soma-typography>
          </soma-card-header>
          <soma-card-content>
            <soma-typography variant="description">
              Veja como começar seu projeto web <strong>React</strong>, <strong>Angular</strong> ou <strong>Vue</strong> utilizando todos os recursos e componentes do soma.
            </soma-typography>
          </soma-card-content>
          <soma-card-actions>
          </soma-card-actions>
        </soma-card>
      </div>
    `,
  }
)

const contributing = markdown(
  {
    header: pageTitle('Contribuindo com o Soma'),
    content: contributingMd,
  }
);

const aboutSoma = markdown(
  {
    header: pageTitle('Soma Design System'),
    content: aboutSomaMd,
  }
);

const aboutStencil = markdown(
  {
    header: pageTitle('Web Components e Stencil'),
    content: aboutStencilMd,
  }
);

export {
  welcome,
  gettingStarted,
  contributing,
  aboutSoma,
  aboutStencil
};
