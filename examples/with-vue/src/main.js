import Vue from 'vue'
import App from './App.vue'
import { applyPolyfills, defineCustomElements } from '@lego-ds/core/loader';

// soma ds
import { applyPolyfills as somaApplyPolyfills, defineCustomElements as somaDefineCustomElements } from '@lego-ds/html/loader';

Vue.config.productionTip = false;

// Lego-ds Component Library
Vue.config.ignoredElements = [/soma-\w*/, /legods-\w*/];
applyPolyfills().then(() => defineCustomElements());

// SOMA DS
somaApplyPolyfills().then(() => somaDefineCustomElements());

new Vue({
  render: h => h(App),
}).$mount('#app')
