// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router.js';
import demoBlock from './components/demo-block.vue';
import XRUI from '../src';

Vue.component('demo-block', demoBlock);
Vue.use(XRUI);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
