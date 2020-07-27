Os Componentes do Soma Design System passam por um fluxo desenvolvimento que garante espelhamento de design e tecnologia, facilitando o reuso, e garantindo também a qualidade dos componentes. Os componentes também contam com a homologação de diversas áreas da empresa. Utilizando o Soma Design System você garante:

* Espelhamento de design e tecnologia (1)
* Maior facilidade para compartilhar
* Componente homologado pela equipe de segurança
* Componente testado
* Componente monitorado
* Componente que garante acessibilidade em design e tecnologia (2)
* Componente compatível com qualquer framework (3)
* Estilo do componente a partir de tokens (4)
* Componente com fluxo consistente de CI/CD (5)
* Componente padronizado e tagueado para digital analytics (6)

###### (1) O fluxo de desenvolvimento garante que para cada componente haverá seu espelhamento em Design. Um componente não muda em Design sem mudar em tecnologia e vice-versa.
###### (2) Todos os componentes que precisam de aria-rules as possuem como required e são monitorados pelo HUB. 
###### (3) Como estamos falando de web components, ela é compatível com qualquer framework.
###### (4) Toda estilização dos componentes partem de Tokens, isso garante reutilização de temas mudando a folha de estilo.
###### (5) Seguimos uma variação do Git Flow para long time branch support.
###### (6) Por utilizarem aria-label e já estarem prontos, os componentes são facilmente monitrados pela equipe de digital analytics.

Além disso, os componentes vão está de acordo com as normas de Design da companhia, dessa forma, criamos um padrão visual.

## Fundamentos Web aplicados ao Soma

### Testes

Todas as libraries que compõe o ecossistema do Soma Web passam por testes unitários, integração e/ou e2e. Os coverages são reportados de maneira particular.

O DesOps.Soma possui seu coverage para o @soma/html dentro do storybook por meio do padrão de shield badges. O DesOps.Soma.DS e o DesOps.Soma.DigitalAnalytics possuem o coverage de build a partir do cobertura, eles podem ser verificados dentro da pipeline. Vecchio e Chameleon não possuem report de coverage ainda.

Os testes do **@soma/html** seguem o padrão estabelecido pelo Stencil.

Ver mais: [https://stenciljs.com/docs/testing-overview](https://stenciljs.com/docs/testing-overview).

Mais relatórios e automações de coverage estão por vir.

### Segurança

Na esteira de disponibilização das libraries o time de segurança varre o código para encontrar vulnerabilidades. É utilizado o **Fortify** que indica pontos de atenção e pontos críticos, pontos de atenção são comunicados ao time e o build é publicado. Pontos críticos o build é barrado e o time precisa subir as correções para gerar um novo build. 

### Documentação

Existem 3 tipos de documentação associadas a parte Web do Soma:

* Zero Height: documentação generalista, resume todo o processo do soma, inclui testes e respostas ao porquê de estilos, padrões e ferramentas.
* Storybook: documentação técnica, útil para desenvolvedores e design testarem as possibilidades componentes, além de capturar samples para um desenvolvimento cada vez mais ágil.
* Azure DevOps: documentação técnica, funciona como um guia de utilização das libraries.

### Acessibilidade e Monitoramento

Aria-rules terão de ser passadas para os componentes, se o componente possuir mais de 1 item alcançável por TAB deverão ser passadas mais de uma aria-rule. As aria-rules estão descritas na documentação.

Caso os atributos classificados como **required** não sejam passados erros serão lançados no console e estarão continuamente sendo monitorados.

### SEO

Os componentes são feitos com elementos HTML semântico, isto é, se você está utilizando um **soma-typography** com variant heading e modifier heading-2 estamos utilizando o elemento HTML **h2**.

Da mesma forma, por exemplo, o soma-link utiliza o elemento HTML <a>.

Além disso a compatibilidade de Web Components com o SEO é igual a de qualquer outro framework.

Ver mais: [https://medium.com/patternfly-elements/web-components-and-seo-58227413e072](https://medium.com/patternfly-elements/web-components-and-seo-58227413e072).

### AMP

Web Components já funcionam como AMP, porém é possível encontrar certas dificuldades ao integrar o Stencil com uma aplicação pura AMP, devido aos imports.

No futuro podemos pensar em tornar mais compatível.

### Responsividade

Todos os componentes já respeitam regras de responsividade, é importante ressaltar que o stencil atribui o style a partir do ConstructableStylesheet, dessa forma os styles ficam como padrão (user-agent), tornando todo o CSS declarado default, essa definição é colocada dentro do arquivo auxiliar .entry, junto com todas as utilidades compartilhadas.

Os tokens relacionados a responsividade são **breakpoint** e **grid**. Os breakpoints dos tokens são Desktop First assim como a nossa library de design no figma.

### Animações

As animações se encontram dentro da library de tokens, são chamadas de **motion-tokens**, elas estão baseadas em velocidade, vibe e delay.