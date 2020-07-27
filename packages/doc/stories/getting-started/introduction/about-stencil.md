Na implementação web do Soma Design System optamos por utilizar [Web Components](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components) que são um conjunto de normas atualmente sendo produzidos por engenheiros do Google como também uma especificação da W3C que permitem a criação de componentes reutilizáveis em documentos e aplicações web.

Hoje os Web Components já tem suporte a todos Browsers modernos, para conferir mais detalhes sobre o suporte dessa tecnologia: [https://www.webcomponents.org/](https://www.webcomponents.org/)

<br />

## Por que Web Components?

Na proposta de atingir todas esquipes da companhia, decidimos enfrentar os desafios trazidos por essa nova tecnologia que propõe **integração com qualquer framework**. Dessa forma a opção por web components tem no seu núcleo atender a todos.

Além disso, as tecnologias as quais Web Components se baseiam: elementos customizados, shadow DOM, templates e Slots HTML, nos permitem a criação de componentes isolados da aplicação, com estilo e script próprio.

Browsers antigos como o IE11 não suportam web components, pois não suportam algumas de suas premissas como a shadow DOM. Mas o uso de toolchain builds como Stencil pode contornar isso.

<img src="./images/webcomponents-support.png" />

<br />

Uma vez que browsers modernos representam 99.91% de acessos da XP, somado ao polyfill do Stencil nós conseguimos prover os componentes para 100% da audiência. O gráfico abaixo foi retirado do Google Analytics e mostra a utilização por navegadores no site da XP.

<img src="./images/xp-support.png" />

<br />

## Por que Stencil

> A powerful toolchain for building Progressive Web Apps and Design Systems.

Criado pela equipe da Ionic, o Stencil é um "compilador de Web Components para criar componentes de interface do usuário rápidos e reutilizáveis". Ou seja, é um compilador para gerar Web Components.

Ele usa TypeScript, JSX, uma minúscula camada DOM virtual, ligação eficiente de dados unidirecional, um pipeline de renderização assíncrono e lazy loading para gerar Componentes da Web baseados em padrões que são executados em navegadores modernos e legados.

O Stencil combina conceitos já utilizados em outras ferramentas populares em uma ferramenta simples para a construção de componentes. Isso complementa nosso objetivo que é fornecer uma ótima experiência para o desenvolvedor sem fugir dos padrões da Web e com alto desempenho. 

#### Motivos para utilizar o Stencil:

* Garante features como Virtual DOM, Async rendering, Reactive data-binding;
* Utiliza TypeScript e JSX;
* Permite Lazy loading;
* Possui uma equipe forte por trás;
* Providencia suporte cross-browser;
* Fornece um scaffolding para criação de libraries de componentes;
* Fornece um scaffolding para testes;
* Fornece um scaffolding para criação de componentes;

É importante salientar que para a escolha do stencil foram consideradas outras ferramentas como Lit Element, Polymer, Vue, Angular e Svelte.

<br />

## Quem utiliza Stencil?

Além do próprio **ionic**, no site do stencil há a lista de empresas:

* Apple
* Amazon
* Porsche
* ARm
* Panera
* Microsoft 

<br />