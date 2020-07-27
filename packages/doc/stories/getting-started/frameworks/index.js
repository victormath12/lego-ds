import { markdown, pageTitle, pageSubtitle } from '../../../utils/templates';

import frameworksMd from "./frameworks.md";
import reactMd from "./react.md";
import angularMd from "./angular.md";
import vueMd from "./vue.md";
import htmlMd from "./html.md";

const frameworks = markdown(
  {
    header: `
      ${pageTitle('Instalando o Soma no seu projeto web')}
      ${pageSubtitle('Selecione um dos frameworks ou bibliotecas abaixo para ver a implementação:')}
      <div style="display: flex; margin: 10px 0 40px 0;">
        <soma-card style="width: 100px; margin: 0 8px; padding: 20px; cursor: pointer;" data-sb-story="Angular">
          <soma-card-media>
            <img src="./images/angular.png" data-sb-story="Angular"/>
          </soma-card-media>
        </soma-card>

        <soma-card style="width: 100px; margin: 0 8px; padding: 20px; cursor: pointer;" data-sb-story="React">
          <soma-card-media>
            <img src="./images/react.png" data-sb-story="React"/>
          </soma-card-media>
        </soma-card>

        <soma-card style="width: 100px; margin: 0 8px; padding: 20px; cursor: pointer;" data-sb-story="Vue">
          <soma-card-media>
            <img src="./images/vue.png" data-sb-story="Vue"/>
          </soma-card-media>
        </soma-card>

        <soma-card style="width: 100px; margin: 0 8px; padding: 20px; cursor: pointer;" data-sb-story="HTML">
          <soma-card-media>
            <img src="./images/html.png" data-sb-story="HTML"/>
          </soma-card-media>
        </soma-card>
      </div>
    `,
    content: frameworksMd,
  }
);

const react = markdown(
  {
    header: pageTitle('React'),
    content: reactMd,
  }
);

const angular = markdown(
  {
    header: pageTitle('Angular'),
    content: angularMd,
    footer: `
      <div style="display: flex; margin: -20px 0 40px 0;">
        <soma-card style="margin: 0 8px; cursor: pointer;" data-sb-story="Sobre o Soma">
          <soma-card-header icon="info-fill">
            <soma-typography modifier="heading-6" variant="heading" data-sb-story="Sobre o Soma">
              Componentes
            </soma-typography>
          </soma-card-header>
          <soma-card-content>
            <soma-typography variant="description" data-sb-story="Sobre o Soma">
              Veja nosso catálogo de components e explore as possibilidades do Soma Design System
            </soma-typography>
          </soma-card-content>
          <soma-card-actions>
          </soma-card-actions>
        </soma-card>

        <soma-card style="margin: 0 8px; cursor: pointer;" data-sb-story="Sobre o Stencil">
          <soma-card-header icon="info-fill">
            <soma-typography modifier="heading-6" variant="heading" data-sb-story="Sobre o Stencil">
              Recursos
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
      </div>
    `,
  }
);

const vue = markdown(
  {
    header: pageTitle('Vue'),
    content: vueMd,
  }
);

const html = markdown(
  {
    header: pageTitle('HTML'),
    content: htmlMd,
  }
);

export {
  frameworks,
  react,
  angular,
  vue,
  html
};