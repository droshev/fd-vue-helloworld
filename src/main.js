import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import FundamentalVue from 'fundamental-vue';
import ourRoutes from './our-routes.js';

require('fiori-fundamentals/dist/fiori-fundamentals.min.css');

Vue.use(FundamentalVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes: ourRoutes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
