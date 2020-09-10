import Vue from 'vue'
import App from './App.vue'
import First from './components/Pages/First/index'
import Second from './components/Pages/Second/index'
import VueRouter from 'vue-router'
import VueMobileDetection from 'vue-mobile-detection'

Vue.use(VueMobileDetection);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: First, name: 'first' },
  { path: '/second', component: Second, name: 'second' },
]

const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
