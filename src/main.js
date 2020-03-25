import Vue from 'vue';
import Portal from 'portal-vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './store';

sync(store, router);
Vue.use(Portal);
Vue.mixin({
  methods: {
    url(url) {
      return url;
    },
  },
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  components: { app: App },
  render: (h) => h('app'),
}).$mount('#app');
