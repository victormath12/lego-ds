Para um projeto VUE você precisa modificar a aplicação, definir os Custom Elements e informar ao compilador VUE quais elementos ignorar durante a compilação, isso pode ser feito no arquivo `main.js`

```js
import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from 'test-components/loader';

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/test-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App)
}).$mount('#app');
```

Os componentes vão ficar disponíveis em qualquer componente VUE

```js
render() {
  return (
    <div>
      <soma-typography variant="caption"></soma-typography>
    </div>
  )
}
```
