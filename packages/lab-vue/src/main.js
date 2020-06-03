import Vue from 'vue'
import App from './App.vue'

// eslint-disable-next-line
import { applyPolyfills, defineCustomElements } from '@lego-ds/components/loader';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/lego-\w*/];

applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
