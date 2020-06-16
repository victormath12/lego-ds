import Vue from 'vue'
import App from './App.vue'
import { applyPolyfills, defineCustomElements } from '@lego-ds/core/loader';

Vue.config.productionTip = false;

// Lego-ds Component Library
Vue.config.ignoredElements = [/legods-\w*/];
applyPolyfills().then(() => defineCustomElements());

new Vue({
  render: h => h(App),
}).$mount('#app')
