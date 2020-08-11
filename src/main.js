import Vue from 'vue'
import App from './App.vue'
import VueObserveVisibility from 'vue-observe-visibility'
import VueRouter from 'vue-router'
import Biblioteca from './pages/Biblioteca';
import Busca from './pages/Busca'
Vue.use(VueObserveVisibility)
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {path: '/', component: Busca},
    { path: '/salvos', component: Biblioteca }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
