# Bem-vindo  

Bem-vindo a implementação WEB do Soma Design System. Nosso principal objetivo é criar uma biblioteca que possa ser utilizada e suportada por todos times da companhia e que também forneça os principais componentes para criação de produtos. Tudo isso dentro de uma experiência consistente, acessível e com bom desempenho.

Na implementação WEB do Soma Design System optamos por utilizar Web Components, dessa forma podemos atender a todos os frameworks da empresa. Web Components são baseados em Shadow DOM e Custom Elements, combinados eles permitem a criação de novos elementos html de maneira encapsulada.

Também contamos com o Stencil para nos ajudar a criar esses componentes, o Stencil é um "toolchain for building design systems", ele nos providencia:

* suporte cross-browser polyffils
* lazy loading
* integração com outros frameworks
* ecossistema com typescript jsx e virtual DOM
* reactive data-biding
* async rendering
* scaffolding para testes
* scaffolding para criação de componentes

Além disso o Stencil é mantido e utilizado pela equipe do IONIC. Outras empresas que utilizam o Stencil são: Apple, Amazon, Porsche, arm, Panera e Microsoft.

É importante salientar que para a escolha do stencil foram consideradas outras ferramentas como Lit Element, Polymer, Vue, Angular e Svelte.

## Por que utilizar os componentes do Soma Design System?

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

## Ecossistema

O Ecossistema da parte Web do Soma Design System consiste em 6 repositório e 8 packages:

| Repositório        | Package           |
| ------------- |:-------------:| 
| DesOps.Soma      | @soma/html |
| DesOps.Soma      | @soma/core      |  
| DesOps.Soma | @soma/lab      | 
| DesOps.Soma | @soma/react      | 
| DesOps.Soma.DS | @soma/ds      | 
| DesOps.Soma.DigitalAnalytics |  soma-digital-analytics     | 
| DesOps.Soma.Tokens | -      | 
| Vecchio | vecchio     | 
| Chameleon |chameleon| 

Entre na sessão Ecossistema para ver mais informações sobre o assunto.

## Mobile

O Soma Design System também está disponível para Android e iOS, veja mais informações no Zero Height.

## Documentação

Além dessa documentação, possuímos também:

* Zero Height
* Docs
* VSTS, cada repositório/package possui a sua




