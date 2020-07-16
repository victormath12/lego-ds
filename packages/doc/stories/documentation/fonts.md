# Fontes
O Soma HTML utiliza Web Fonts 

Para titulos principais é utilizado a fonte [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab).

Para demais textos a fonte [Roboto](https://fonts.google.com/specimen/Roboto).

Ao adicionar o `@soma/html` ou `@soma/react` **automaticamente** as fontes são inseridas no elemento `<head>` do seu projeto. Porém se você não está utilizando nenhum package e ainda assim quer utilizar a fonte basta inserir no `<head>` do seu projeto:

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,500,600,700&display=swap" rel="stylesheet">
```

