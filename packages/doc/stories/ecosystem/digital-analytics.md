# Digital Analytics

Além da documentação comum o Soma - Digital Analytics conta com relatório Cobertura de coverage e com um arquivo de exemplo.

## Descrição

O Soma - Digital Analytics cria eventos específicos para consumo do script no GTM.

Atualmente 2 tipos de eventos são mapeados:

- soma-click-event: mapeia todos os clicks para o ducument, a equipe de D.A filtrará os elementos por meio do atributo ```trackable```.
- soma-view-event: mapeia todas as vezes que um elemento com o atributo ```trackable-view``` esta na viewport.

_O evento soma-view-event é implementado por meio do Intersection Observer, se esse não existe utilizamos o scroll._

_O fallback do evento soma-view-event atualmente possui debounce 3000ms._

_No evento soma-view-event esta considerado dentro da viewport o elemento que tiver qualquer parte sua dentro da viewport._

A compatibilidade com SPA é realizada por meio do **mutation observer** junto com o debounce para não impactar performance.


## Instalação

```shell
npm i soma-digital-analytics
```

## Utilização

Importar o script em node_modules/soma-digital-analytics.

```html
<script src="/node_modules/soma-digital-analytics/index.js"></script>
```
